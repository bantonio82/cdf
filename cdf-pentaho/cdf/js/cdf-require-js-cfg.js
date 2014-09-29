/*!
* Copyright 2002 - 2013 Webdetails, a Pentaho company.  All rights reserved.
* 
* This software was developed by Webdetails and is provided under the terms
* of the Mozilla Public License, Version 2.0, or any later version. You may not use
* this file except in compliance with the license. If you need a copy of the license,
* please go to  http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
*
* Software distributed under the Mozilla Public License is distributed on an "AS IS"
* basis, WITHOUT WARRANTY OF ANY KIND, either express or  implied. Please refer to
* the license for the specific language governing your rights and limitations.
*/

requireCfg['paths']['cdf'] = CONTEXT_PATH+'content/pentaho-cdf/js';
requireCfg['shim']['cdf/cdf-module'] = [
	'cdf/lib/jquery/jquery',
	'cdf/lib/jquery/jquery.ui',
	'cdf/lib/jquery-impromptu.3.1',
	'cdf/lib/jquery-ui-datepicker-i18n',
	'cdf/lib/jquery.bgiframe',
	'cdf/lib/jquery/jquery.blockUI',
	'cdf/lib/jquery.corner',
	'cdf/lib/jquery.eventstack',
	'cdf/lib/jquery.i18n.properties',
	'cdf/lib/jquery.jdMenu',
	'cdf/lib/jquery.positionBy',
	'cdf/lib/jquery.sparkline',
	'cdf/lib/jquery.tooltip',
	'cdf/lib/simile/ajax/simile-ajax-api',
	'cdf/lib/simile/ajax/scripts/json',
	'cdf/lib/json',
	'cdf/lib/underscore/underscore',
	'cdf/lib/backbone/backbone',
	'cdf/lib/mustache/mustache',
	'cdf/lib/base/Base',
	'cdf/Dashboards',	
    'cdf/lib/shims',
    'cdf/lib/CCC/protovis',
    'cdf/lib/CCC/tipsy',
    'cdf/lib/CCC/jquery.tipsy',
    'cdf/lib/CCC/def',     
    'cdf/lib/CCC/pvc-d1.0',
    'cdf/lib/CCC/compatVersion'
];




requireCfg['shim']['cdf/Dashboards'] = [
    'cdf/lib/base/Base',
    'cdf/lib/underscore/underscore',
    'cdf/lib/backbone/backbone',
    'cdf/lib/mustache/mustache',
    'cdf/lib/shims',
    'cdf/Dashboards.Main',
	'cdf/Dashboards.Query',
    'cdf/Dashboards.AddIns',
    'cdf/Dashboards.Bookmarks',
    'cdf/Dashboards.Legacy',
    'cdf/Dashboards.Notifications',
    'cdf/Dashboards.RefreshEngine',
    'cdf/Dashboards.Utils'
];
requireCfg['shim']['cdf/Dashboards.Main'] = [
	'cdf/lib/base/Base',
    'cdf/lib/underscore/underscore',
    'cdf/lib/backbone/backbone',
    'cdf/lib/mustache/mustache',
    'cdf/lib/shims',
    'cdf/lib/jquery/jquery.blockUI',
    'cdf/Dashboards.Startup',
    'cdf/cdf-base'
];
requireCfg['shim']['cdf/cdf-base'] = [
    'cdf/wd'
];

requireCfg['shim']['cdf/Dashboards.Startup']        = ['cdf/lib/shims'];
requireCfg['shim']['cdf/Dashboards.AddIns'] 		= ['cdf/Dashboards.Main', 'cdf/Dashboards.Query'];
requireCfg['shim']['cdf/Dashboards.Bookmarks'] 		= ['cdf/Dashboards.Main'];
requireCfg['shim']['cdf/Dashboards.Legacy'] 		= ['cdf/Dashboards.Main'];
requireCfg['shim']['cdf/Dashboards.Notifications'] 	= ['cdf/Dashboards.Main'];
requireCfg['shim']['cdf/Dashboards.Query'] 			= ['cdf/Dashboards.Main'];
requireCfg['shim']['cdf/Dashboards.RefreshEngine'] 	= ['cdf/Dashboards.Main'];
requireCfg['shim']['cdf/Dashboards.Utils'] 			= ['cdf/Dashboards.Main'];


requireCfg['shim']['cdf/lib/underscore/underscore'] 			= ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/backbone/backbone'] 				= ['cdf/lib/underscore/underscore'];
requireCfg['shim']['cdf/lib/CCC/compatVersion'] = ['cdf/lib/CCC/pvc-d1.0'];
requireCfg['shim']['cdf/lib/CCC/pvc-d1.0'] 		= ['cdf/lib/CCC/protovis', 'cdf/lib/CCC/tipsy', 'cdf/lib/CCC/jquery.tipsy', 'cdf/lib/CCC/def'];

requireCfg['shim']['cdf/lib/CCC/tipsy'] 		= ['cdf/lib/CCC/protovis'];
requireCfg['shim']['cdf/lib/CCC/jquery.tipsy'] 	= ['cdf/lib/CCC/tipsy'];

requireCfg['shim']['cdf/components/core'] 		= ['cdf/Dashboards'];
requireCfg['shim']['cdf/components/ccc'] 		= ['cdf/components/core', 'cdf/lib/CCC/pvc-d1.0'];
requireCfg['shim']['cdf/components/input'] 		= ['cdf/components/core'];
requireCfg['shim']['cdf/components/jfreechart'] = ['cdf/components/core'];
requireCfg['shim']['cdf/components/maps'] 		= ['cdf/components/core'];
requireCfg['shim']['cdf/components/navigation'] = ['cdf/components/core'];
requireCfg['shim']['cdf/components/pentaho'] 	= [
	'cdf/components/core',
	'cdf/components/Pentaho.JPivot',
	'cdf/components/Pentaho.XAction',
	'cdf/components/Pentaho.Analyzer',
	'cdf/components/Pentaho.Reporting'
];
requireCfg['shim']['cdf/components/simpleautocomplete'] = ['cdf/components/core'];
requireCfg['shim']['cdf/components/table'] = ['cdf/components/core'];


requireCfg['shim']['cdf/lib/jquery/jquery.ui'] = ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/jquery-impromptu.3.1'] = ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/jquery-ui-datepicker-i18n'] = ['cdf/lib/jquery.ui'];
requireCfg['shim']['cdf/lib/jquery.bgiframe'] = ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/jquery/jquery.blockUI'] = ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/jquery.corner'] = ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/jquery.eventstack'] = ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/jquery.i18n.properties'] = ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/jquery.jdMenu'] = ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/jquery.positionBy'] = ['cdf/lib/jquery/jquery'];
requireCfg['shim']['cdf/lib/jquery.sparkline'] = ['cdf/lib/jquey/jquery'];
requireCfg['shim']['cdf/lib/jquery.tooltip'] = ['cdf/lib/jquery/jquery'];

requireCfg['shim']['cdf/lib/simile/ajax/scripts/json'] = ['cdf/lib/simile/ajax/simile-ajax-api'];

requireCfg['shim']['cdf/lib/json'] = ['cdf/lib/simile/ajax/simile-ajax-api'];

