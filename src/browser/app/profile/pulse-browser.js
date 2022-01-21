// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
// Note: You must have semicolons at the end of each line in user setting files

// Enable downloading drm
pref('media.eme.enabled', true);

// Disable firefox's about:welcome page
pref('browser.aboutwelcome.enabled', false);

pref('pulse.welcome.enabled', true);
pref('pulse.welcome.seen', false);

// This preference tells the browser that our addons are preinstalled and should
// be provided with permissions without asking
// TODO: Documentation in melon for preference
pref('extensions.installedDistroAddon.newtab@browser.fushra.com', true);

pref('browser.discovery.enabled', false);

#include better-fox.js