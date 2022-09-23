(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"start":"this.init()","borderSize":0,"data":{"textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"rate":1},"name":"Player478","defaultLocale":"en","locales":{"en":"locale/en.txt"}},"backgroundColorRatios":[0],"defaultVRPointer":"laser","borderRadius":0,"propagateClick":false,"gap":10,"mobileMipmappingEnabled":false,"scrollBarWidth":10,"paddingLeft":0,"id":"rootPlayer","mouseWheelEnabled":true,"scrollBarMargin":2,"paddingTop":0,"paddingBottom":0,"paddingRight":0,"scrollBarVisible":"rollOver","overflow":"hidden","scrollBarColor":"#000000","definitions": [{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_622B499C_6837_0218_41A8_FDE9A5CED544","automaticZoomSpeed":10,"id":"panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F_camera"},{"frames":[{"thumbnailUrl":"media/panorama_623C23D8_6837_0618_41D8_22049B4E5881_t.jpg","cube":{"levels":[{"width":6144,"url":"media/panorama_623C23D8_6837_0618_41D8_22049B4E5881_0/{face}/0/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"width":3072,"url":"media/panorama_623C23D8_6837_0618_41D8_22049B4E5881_0/{face}/1/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfov":360,"adjacentPanoramas":[{"distance":2.57,"yaw":-95.05,"panorama":"this.panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F","select":"this.overlay_66F1DD0C_6833_03F9_41D3_E94D33E41856.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_66F1DD0C_6833_03F9_41D3_E94D33E41856"},"class":"AdjacentPanorama","backwardYaw":91.58}],"pitch":0,"overlays":["this.overlay_66F1DD0C_6833_03F9_41D3_E94D33E41856"],"thumbnailUrl":"media/panorama_623C23D8_6837_0618_41D8_22049B4E5881_t.jpg","vfov":180,"class":"Panorama","label":trans('panorama_623C23D8_6837_0618_41D8_22049B4E5881.label'),"id":"panorama_623C23D8_6837_0618_41D8_22049B4E5881","hfovMax":130,"hfovMin":"150%","partial":false,"data":{"label":"308238249_438944518088515_3730913542365964084_n"}},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_6214A99E_6837_0218_41C9_C174B682A7DB","automaticZoomSpeed":10,"id":"panorama_623C23D8_6837_0618_41D8_22049B4E5881_camera"},{"gyroscopeVerticalDraggingEnabled":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"arrowKeysAction":"translate","aaEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"frames":[{"thumbnailUrl":"media/panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F_t.jpg","cube":{"levels":[{"width":6144,"url":"media/panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F_0/{face}/0/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"width":3072,"url":"media/panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F_0/{face}/1/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfov":360,"adjacentPanoramas":[{"distance":2.36,"yaw":91.58,"panorama":"this.panorama_623C23D8_6837_0618_41D8_22049B4E5881","select":"this.overlay_65579D47_683D_0268_41D0_B2BAEB2D24DC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_65579D47_683D_0268_41D0_B2BAEB2D24DC"},"class":"AdjacentPanorama","backwardYaw":-95.05}],"pitch":0,"overlays":["this.overlay_65579D47_683D_0268_41D0_B2BAEB2D24DC"],"thumbnailUrl":"media/panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F_t.jpg","vfov":180,"class":"Panorama","label":trans('panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F.label'),"id":"panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F","hfovMax":130,"hfovMin":"150%","partial":false,"data":{"label":"307898353_1048862695778271_2648120646651934740_n"}},{"toolTipBorderRadius":3,"subtitlesTextShadowOpacity":1,"borderSize":0,"borderRadius":0,"progressBackgroundOpacity":1,"toolTipTextShadowOpacity":0,"progressBottom":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","paddingLeft":0,"playbackBarBackgroundColor":["#FFFFFF"],"data":{"name":"Main Viewer"},"displayTooltipInSurfaceSelection":true,"id":"MainViewer","playbackBarHeight":10,"toolTipShadowColor":"#333138","playbackBarBackgroundOpacity":1,"toolTipFontColor":"#606060","paddingRight":0,"playbackBarHeadWidth":6,"surfaceReticleSelectionOpacity":1,"width":"100%","toolTipPaddingRight":6,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressRight":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColorDirection":"vertical","progressOpacity":1,"toolTipFontStyle":"normal","progressBarBackgroundColorDirection":"vertical","toolTipPaddingTop":4,"subtitlesEnabled":true,"toolTipBorderSize":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowHorizontalLength":0,"playbackBarProgressBorderRadius":0,"progressBarBackgroundColorRatios":[0],"height":"100%","progressBarBorderColor":"#000000","subtitlesFontWeight":"normal","toolTipTextShadowBlurRadius":3,"progressBackgroundColorDirection":"vertical","toolTipFontFamily":"Arial","progressHeight":10,"playbackBarHeadShadowHorizontalLength":0,"subtitlesTop":0,"class":"ViewerArea","subtitlesPaddingLeft":5,"playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesPaddingBottom":5,"progressBorderSize":0,"subtitlesFontSize":"3vmin","progressBorderColor":"#000000","minHeight":50,"subtitlesBottom":50,"subtitlesBackgroundOpacity":0.2,"minWidth":100,"toolTipFontWeight":"normal","progressBarBorderRadius":0,"transitionDuration":500,"displayTooltipInTouchScreens":true,"progressBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","subtitlesPaddingRight":5,"playbackBarProgressBackgroundColorRatios":[0],"firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarProgressBorderColor":"#000000","toolTipPaddingBottom":4,"toolTipShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesFontFamily":"Arial","paddingTop":0,"paddingBottom":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"playbackBarProgressOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"subtitlesPaddingTop":5,"vrPointerSelectionColor":"#FF6600","playbackBarHeadOpacity":1,"playbackBarHeadBorderColor":"#000000","vrPointerColor":"#FFFFFF","subtitlesShadow":false,"playbackBarBorderRadius":0,"toolTipDisplayTime":600,"toolTipShadowOpacity":1,"subtitlesTextShadowHorizontalLength":1,"toolTipHorizontalAlign":"center","playbackBarBorderSize":0,"toolTipPaddingLeft":6,"progressBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"playbackBarOpacity":1,"transitionMode":"blending","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"subtitlesGap":0,"progressBarOpacity":1,"progressBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"subtitlesBackgroundColor":"#000000","subtitlesHorizontalAlign":"center","subtitlesTextShadowVerticalLength":1,"subtitlesVerticalAlign":"bottom","toolTipShadowSpread":0,"progressBackgroundColorRatios":[0],"translationTransitionDuration":1000,"toolTipFontSize":"1.11vmin","progressLeft":0,"toolTipShadowVerticalLength":0,"surfaceReticleColor":"#FFFFFF","shadow":false,"surfaceReticleOpacity":0.6,"playbackBarBottom":5,"propagateClick":false,"toolTipBorderColor":"#767676"},{"class":"PlayList","items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F","class":"PanoramaPlayListItem","camera":"this.panorama_62EC4D0C_6837_03F8_41D2_38B5D2BE694F_camera","player":"this.MainViewerPanoramaPlayer"},{"camera":"this.panorama_623C23D8_6837_0618_41D8_22049B4E5881_camera","media":"this.panorama_623C23D8_6837_0618_41D8_22049B4E5881","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_622B499C_6837_0218_41A8_FDE9A5CED544"},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 01b"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"vfov":5.73,"class":"HotspotPanoramaOverlayImage","yaw":-95.05,"hfov":10.5,"data":{"label":"Arrow 01b"},"verticalAlign":"middle","image":"this.AnimatedImageResource_675F9EC6_6853_1E69_41CF_9510BBE7AF56","horizontalAlign":"center","pitch":-33.43,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_673FED5F_6833_0218_41D4_0E42249C29F5"],"maps":[],"id":"overlay_66F1DD0C_6833_03F9_41D3_E94D33E41856"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_6214A99E_6837_0218_41C9_C174B682A7DB"},{"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 01a"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":100,"vfov":5.73,"class":"HotspotPanoramaOverlayImage","yaw":91.58,"hfov":10.5,"data":{"label":"Arrow 01a"},"verticalAlign":"middle","image":"this.AnimatedImageResource_675FAEC6_6853_1E69_41D9_F2E04BB93320","horizontalAlign":"center","pitch":-35.76,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_65F1CDDC_683D_0218_41D1_03C4AC4AD5BE"],"maps":[],"id":"overlay_65579D47_683D_0268_41D0_B2BAEB2D24DC"},{"frameDuration":62,"levels":[{"height":138,"width":252,"class":"ImageResourceLevel","url":"media/res_66F2ADAB_684D_0238_41B9_C30248F8EA4A_0.png"}],"colCount":3,"class":"AnimatedImageResource","frameCount":9,"rowCount":3,"id":"AnimatedImageResource_675F9EC6_6853_1E69_41CF_9510BBE7AF56"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_673FED5F_6833_0218_41D4_0E42249C29F5"},{"frameDuration":62,"levels":[{"height":138,"width":252,"class":"ImageResourceLevel","url":"media/res_664DEB18_6835_0619_41D1_B75188B3664C_0.png"}],"colCount":3,"class":"AnimatedImageResource","frameCount":9,"rowCount":3,"id":"AnimatedImageResource_675FAEC6_6853_1E69_41D9_F2E04BB93320"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_65F1CDDC_683D_0218_41D1_03C4AC4AD5BE"}],"vrPolyfillScale":0.75,"horizontalAlign":"left","contentOpaque":false,"toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"width":"100%","backgroundOpacity":1,"height":"100%","backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"mediaActivationMode":"window","verticalAlign":"top","layout":"absolute","class":"Player","children":["this.MainViewer"],"downloadEnabled":false,"backgroundPreloadEnabled":true,"scripts":{"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"translate":TDV.Tour.Script.translate,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"textToSpeech":TDV.Tour.Script.textToSpeech,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"downloadFile":TDV.Tour.Script.downloadFile,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getKey":TDV.Tour.Script.getKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"cloneCamera":TDV.Tour.Script.cloneCamera,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"openLink":TDV.Tour.Script.openLink,"setMapLocation":TDV.Tour.Script.setMapLocation,"clone":TDV.Tour.Script.clone,"initQuiz":TDV.Tour.Script.initQuiz,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"init":TDV.Tour.Script.init,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMainViewer":TDV.Tour.Script.getMainViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"existsKey":TDV.Tour.Script.existsKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"registerKey":TDV.Tour.Script.registerKey,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setValue":TDV.Tour.Script.setValue,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPixels":TDV.Tour.Script.getPixels,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"setLocale":TDV.Tour.Script.setLocale,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaByName":TDV.Tour.Script.getMediaByName,"showWindow":TDV.Tour.Script.showWindow,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizShowScore":TDV.Tour.Script.quizShowScore,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizStart":TDV.Tour.Script.quizStart,"shareSocial":TDV.Tour.Script.shareSocial,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizFinish":TDV.Tour.Script.quizFinish,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia},"backgroundColorDirection":"vertical","minHeight":20,"minWidth":20,"shadow":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.21.js.map
})();
//Generated with v2022.0.21, Fri Sep 23 2022