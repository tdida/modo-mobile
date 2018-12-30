"use strict";

var os = require('os');

var path = require('path');

var childProcess = require('child_process');

function createWorkers(count) {
  var workers = [];

  while (workers.length < count) {
    var worker = childProcess.fork(path.join(__dirname, './worker.js'));
    worker.setMaxListeners(1);
    workers.push(worker);
  }

  return workers;
}

var workersCount = os.cpus().length - 1;

module.exports = function () {
  var workers = createWorkers(workersCount);
  var tasksQueue = [];

  function arrange(task) {
    var worker = workers.pop();
    var callback = task.callback;
    worker.send(task);
    worker.once('message', function (result) {
      callback(null, result);
      workers.push(worker); // mission completed

      if (tasksQueue.length > 0) {
        arrange(tasksQueue.pop());
      }
    });
  }

  return {
    queue: function queue(task) {
      if (workers.length <= 0) {
        tasksQueue.push(task);
        return;
      }

      arrange(task);
    },
    jobDone: function jobDone() {
      workers.forEach(function (w) {
        return w.kill();
      });
    }
  };
}();