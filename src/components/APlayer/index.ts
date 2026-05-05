import { PropType, defineComponent, h } from "vue";
import Meting from "../Meting/meting.js";

import type { VNode } from "vue";
import type { APlayerComponentsOptions } from "../../options.js";
import type { APlayerOptions } from "aplayer/dist/APlayer.min.js";

// @ts-ignore
import { aplayerOptions } from "@temp/SbAudioOptions.json";

const APlayerOptionsDefault = aplayerOptions as APlayerComponentsOptions;

export default defineComponent({
  props: {
    fixed: {
      type: Boolean,
      default: APlayerOptionsDefault.fixed,
    },
    mini: {
      type: Boolean,
      default: APlayerOptionsDefault.mini,
    },
    autoplay: {
      type: Boolean,
      default: APlayerOptionsDefault.autoplay,
    },
    theme: {
      type: String,
      default: APlayerOptionsDefault.theme,
    },
    loop: {
      type: String as PropType<"all" | "one" | "none">,
      default: APlayerOptionsDefault.loop,
    },
    order: {
      type: String as PropType<"list" | "random">,
      default: APlayerOptionsDefault.order,
    },
    preload: {
      type: String as PropType<"none" | "metadata" | "auto">,
      default: APlayerOptionsDefault.preload,
    },
    volume: { type: Number, default: APlayerOptionsDefault.volume },
    mutex: { type: Boolean, default: APlayerOptionsDefault.mutex },
    listFolded: { type: Boolean, default: APlayerOptionsDefault.listFolded },
    listMaxHeight: {
      type: String,
      default: APlayerOptionsDefault.listMaxHeight,
    },
    lrcType: {
      type: Number as PropType<1 | 2 | 3>,
      default: APlayerOptionsDefault.lrcType,
    },
    audio: {
      type: [Object, Array],
      required: true,
    },
    storageName: { type: String, default: APlayerOptionsDefault.storageName },
    customAudioType: {
      type: Object as PropType<Record<string, void>>,
      default: () => APlayerOptionsDefault.customAudioType,
    },
    customInit: {
      type: Object as PropType<
        (player: any, src: APlayerOptions) => Promise<any>
      >,
      default: () => APlayerOptionsDefault.customAudioType,
    },
  },
  setup(props) {
    const src: APlayerComponentsOptions = {
      ...props,
    } as APlayerComponentsOptions;

    return (): VNode => h(Meting, { src });
  },
});
