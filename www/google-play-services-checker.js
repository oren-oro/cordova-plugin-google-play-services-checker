var emptyFnc = function () {
};
module.exports = {
  check: function (successCallback, errorCallback) {
    cordova.exec(successCallback || emptyFnc, errorCallback || emptyFnc, "GooglePlayServicesChecker", "check", []);
  },
  fix: function (successCallback, errorCallback) {
    cordova.exec(successCallback || emptyFnc, errorCallback || emptyFnc, "GooglePlayServicesChecker", "fix", []);
  },
  ConnectionResult: {
      SUCCESS: 0,
      SERVICE_MISSING: 1,
      SERVICE_VERSION_UPDATE_REQUIRED: 2,
      SERVICE_DISABLED: 3,
      SERVICE_INVALID: 9,
      SERVICE_UPDATING: 18,
  }
};
