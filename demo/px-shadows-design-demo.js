/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../../@polymer/polymer/polymer-legacy.js';

import '../../px-sass-doc/px-sass-doc.js';
import '../css/px-shadows-design-demo-styles.js';
import { Polymer } from '../../@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../../@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-shadows-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-shadows-design" description="The Predix UI Shadows module provides a set of predefined shadow styles that give a visual rhythm to the design system." layer="objects" sassdoc-path="sassdoc.json" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<px-sass-doc-option slot="options" option-name="Options" choose-with="dropdown" choices="[
    &quot;Component&quot;,
    &quot;Temporary state&quot;,
    &quot;Navigation&quot;,
    &quot;Notification&quot;,
    &quot;Modal state&quot;
  ]" default-choice="Component">
</px-sass-doc-option>


<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<div class\$="demo {{shadowsClass}}">{{demoText}}</div>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
@import "px-shadows-design/_objects.shadows.scss";
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
\`\`\`
<!-- Shadow Level 1: Component -->
<div class="shadow-component"></div>


<!-- Shadow Level 3: Temporary States -->
<div class="shadow-temporary"></div>


<!-- Shadow Level 4: Navigation -->
<div class="shadow-navigation"></div>


<!-- Shadow Level 8: Notifications -->
<div class="shadow-notification"></div>


<!-- Shadow Level 12: Modal State -->
<div class="shadow-modal"></div>
\`\`\`

<!--<div class="u-mt++" style="color:#4c6472">-->
<div class=".demo-text--gray u-mt++">
  <p class="epsilon">Shadow Levels</p>
  <div class="demo-shadow__box demo-shadow__box--background shadow-modal"> <span class="u-mr-">12</span> Modal State</div>
  <div class="demo-shadow__box"> 11 </div>
  <div class="demo-shadow__box"> 10 </div>
  <div class="demo-shadow__box"> 9 </div>
  <div class="demo-shadow__box demo-shadow__box--background shadow-notification"> <span class="u-mr">8</span> Notification</div>
  <div class="demo-shadow__box"> 7 </div>
  <div class="demo-shadow__box"> 6 </div>
  <div class="demo-shadow__box"> 5 </div>
  <div class="demo-shadow__box demo-shadow__box--background shadow-navigation"> <span class="u-mr">4</span> Navigation</div>
  <div class="demo-shadow__box demo-shadow__box--background shadow-temporary"> <span class="u-mr">3</span> Temporary State</div>
  <div class="demo-shadow__box"> 2 </div>
  <div class="demo-shadow__box demo-shadow__box--background shadow-component"> <span class="u-mr">1</span> Component</div>
  <div class="demo-shadow__box"> <span class="u-mr">0</span> Base Level</div>
</div>
</section>

</px-sass-doc>
`,

  is: 'px-shadows-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.shadowsClass = this._shadowsClass();
    this.demoText = this._demoText();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _shadowsClass : function() {
    var opts = this.selectedOptions || {};

    if(opts.Options === "Component") return "shadow-component";
    if(opts.Options === "Temporary state") return "shadow-temporary";
    if(opts.Options === "Navigation") return "shadow-navigation";
    if(opts.Options === "Notification") return "shadow-notification";
    if(opts.Options === "Modal state") return "shadow-modal";
  },

  _demoText : function() {
    var opts = this.selectedOptions || {};

    if(opts.Options === "Component") return "Level 1: Component";
    if(opts.Options === "Temporary state") return "Level 3: Temporary State";
    if(opts.Options === "Navigation") return "Level 4: Navigation";
    if(opts.Options === "Notification") return "Level 8: Notification";
    if(opts.Options === "Modal state") return "Level 12: Modal State";
  }
});
