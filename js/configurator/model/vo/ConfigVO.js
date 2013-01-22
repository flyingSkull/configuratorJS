/**
 * Created with JetBrains WebStorm.
 * User: Ric
 * Date: 22.01.13
 * Time: 16:30
 * To change this template use File | Settings | File Templates.
 */

var ConfigVO = function
    (
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
        imagePropertiesArray
) {

    this.initialize = function
        (
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
            imagePropertiesArray
            ) {

        if (reflection_alpha != null)
            this.reflection_alpha = reflection_alpha;
        if (reflection_blendMode != null)
            this.reflection_blendMode = reflection_blendMode;
        if (diffusion_alpha != null)
            this.diffusion_alpha = diffusion_alpha;
        if (diffusion_blendMode != null)
            this.diffusion_blendMode = diffusion_blendMode;
        if (show_admin_panel != null)
            this.show_admin_panel = show_admin_panel;
        if (show_turn_right_button != null)
            this.show_turn_right_button = show_turn_right_button;
        if (show_turn_left_button != null)
            this.show_turn_left_button = show_turn_left_button;
        if (show_fullscreen_button != null)
            this.show_fullscreen_button = show_fullscreen_button;
        if (show_facebook_button != null)
            this.show_facebook_button = show_facebook_button;
        if (animateOnFirstRun != null)
            this.animateOnFirstRun = animateOnFirstRun;
        if (blurXFrom != null)
            this.blurXFrom = blurXFrom;
        if (blurDuration != null)
            this.blurDuration = blurDuration;
        if (imageHost != null)
            this.imageHost = imageHost;
        if (loadingOrderFirstStep != null)
            this.loadingOrderFirstStep = loadingOrderFirstStep;
        if (loadingOrderFinalStep != null)
            this.loadingOrderFinalStep = loadingOrderFinalStep;
        if (imagePropertiesArray != null)
            this.imagePropertiesArray = imagePropertiesArray;
    }

    this.reflection_alpha,
    this.reflection_blendMode,
    this.diffusion_alpha,
    this.diffusion_blendMode,
    this.show_admin_panel,
    this.show_turn_right_button,
    this.show_turn_left_button,
    this.show_fullscreen_button,
    this.show_facebook_button,
    this.animateOnFirstRun,
    this.blurXFrom,
    this.blurDuration,
    this.imageHost,
    this.loadingOrderFirstStep,
    this.loadingOrderFinalStep,
    this.imagePropertiesArray
}
ConfigVO = new Class(new ConfigVO());