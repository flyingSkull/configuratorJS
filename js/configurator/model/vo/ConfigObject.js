/**
 * Created with JetBrains WebStorm.
 * User: Ric
 * Date: 23.01.13
 * Time: 14:12
 * To change this template use File | Settings | File Templates.
 */

var ConfigObject = function (
    reflection_alpha,
    reflection_blendMode,
    diffusion_alpha,
    diffusion_blendMode,
    show_admin_panel,
    show_turn_right_button,
    show_turn_left_button,
    show_fullscreen_button,
    show_facebook_button,
    animateOnFirstRun,
    blurXFrom,
    blurDuration,
    imageHost,
    loadingOrderFirstStep,
    loadingOrderFinalStep,
    imagePropertiesArray) {


    this.reflection_alpha = reflection_alpha;
    this.reflection_blendMode = reflection_blendMode;
    this.diffusion_alpha = diffusion_alpha;
    this.diffusion_blendMode = diffusion_blendMode;
    this.show_admin_panel = show_admin_panel;
    this.show_turn_right_button = show_turn_right_button;
    this.show_turn_left_button = show_turn_left_button;
    this.show_fullscreen_button = show_fullscreen_button;
    this.show_facebook_button = show_facebook_button;
    this.animateOnFirstRun = animateOnFirstRun;
    this.blurXFrom = blurXFrom;
    this.blurDuration = blurDuration;
    this.imageHost = imageHost;
    this.loadingOrderFirstStep = loadingOrderFirstStep;
    this.loadingOrderFinalStep = loadingOrderFinalStep;
    this.imagePropertiesArray = imagePropertiesArray;
};

