/* global ga */

import Ember from "ember";

export function initialize(app) {
  if (app.__ga_initialized__) return;

  // Create the one and only tracker need for the application.
  const ENV = app.resolveRegistration("config:environment");
  const addonConfig = ENV["ember-cli-google"] || {};
  const analyticsConfig = addonConfig["analytics"] || {};
  const trackerId = analyticsConfig.trackerId;

  Ember.assert(
    "Missing ember-cli-google.analytics.trackerId in config/environment.",
    !!trackerId
  );

  const cookieDomain = analyticsConfig.cookieDomain
    ? analyticsConfig.cookieDomain
    : "auto";
  const trackerName = analyticsConfig.trackerName;

  // We only apply Google Analytics in the production environment. Otherwise, we run
  // the risk of collecting analytics of the application while it is in development,
  // testing, or any non-production environment.
  const { environment } = ENV;
  const isProductionEnv = environment === "production";

  if (isProductionEnv) {
    window.ga =
      window.ga ||
      function () {
        (ga.q = ga.q || []).push(arguments);
      };
    ga.l = +new Date();
    ga("create", trackerId, cookieDomain, trackerName);
    ga("send", "pageview");
  }

  app.__ga_initialized__ = true;
}

export default {
  initialize,
};
