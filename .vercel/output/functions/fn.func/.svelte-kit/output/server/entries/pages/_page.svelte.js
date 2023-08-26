import { c as create_ssr_component, d as add_styles, f as add_attribute, e as escape, v as validate_component, h as each, m as missing_component } from "../../chunks/ssr.js";
const Icon_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "span.svelte-6jsb47{display:flex;align-items:center;justify-content:center}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = void 0 } = $$props;
  let { width = 24 } = $$props;
  let { height = 24 } = $$props;
  let { color = void 0 } = $$props;
  let { customIconSvg = void 0 } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customIconSvg === void 0 && $$bindings.customIconSvg && customIconSvg !== void 0)
    $$bindings.customIconSvg(customIconSvg);
  $$result.css.add(css$3);
  return `${customIconSvg ? `<span class="svelte-6jsb47"${add_styles({ color })}><!-- HTML_TAG_START -->${customIconSvg}<!-- HTML_TAG_END --></span>` : `${name === "error" || name === "warning" || name === "success" || name === "info" || name === "help" || name === "close" ? `<span class="svelte-6jsb47"${add_styles({ color })}><svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 24 24">${name === "error" ? `<path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v4q0 .425.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>` : `${name === "warning" ? `<path fill="currentColor" d="M2.725 21q-.275 0-.5-.138t-.35-.362q-.125-.225-.138-.488t.138-.512l9.25-16q.15-.25.388-.375T12 3q.25 0 .488.125t.387.375l9.25 16q.15.25.138.513t-.138.487q-.125.225-.35.363t-.5.137H2.725ZM12 18q.425 0 .713-.288T13 17q0-.425-.288-.713T12 16q-.425 0-.713.288T11 17q0 .425.288.713T12 18Zm0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.713T12 10q-.425 0-.713.288T11 11v3q0 .425.288.713T12 15Z"></path>` : `${name === "success" ? `<path fill="currentColor" d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>` : `${name === "info" ? `<path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.713T12 11q-.425 0-.713.288T11 12v4q0 .425.288.713T12 17Zm0-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"></path>` : `${name === "help" ? `<path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887q0-.525-.362-.888t-.888-.362q-.525 0-.887.363t-.363.887q0 .525.363.888t.887.362Zm.05 4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.1-14.3q.625 0 1.088.4t.462 1q0 .55-.337.975t-.763.8q-.575.5-1.012 1.1t-.438 1.35q0 .35.263.588t.612.237q.375 0 .638-.25t.337-.625q.1-.525.45-.938t.75-.787q.575-.55.988-1.2t.412-1.45q0-1.275-1.038-2.087T12.1 6q-.95 0-1.812.4T8.975 7.625q-.175.3-.113.638t.338.512q.35.2.725.125t.625-.425q.275-.375.688-.575t.862-.2Z"></path>` : `${name === "close" ? `<path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"></path>` : ``}`}`}`}`}`}</svg></span>` : ``}`}`;
});
const DEFAULT_VARIANTS = {
  error: {
    primaryColor: "#db3057",
    primaryColorVariant: "#50001c",
    fontColor: "#ffffff"
  },
  warning: {
    primaryColor: "#fc8622",
    primaryColorVariant: "#832f0b",
    fontColor: "#ffffff"
  },
  success: {
    primaryColor: "#03a66a",
    primaryColorVariant: "#014027",
    fontColor: "#ffffff"
  },
  info: {
    primaryColor: "#0070e1",
    primaryColorVariant: "#042b52",
    fontColor: "#ffffff"
  },
  help: {
    primaryColor: "#ba68c8",
    primaryColorVariant: "#410a58",
    fontColor: "#ffffff"
  },
  default: {
    primaryColor: "#648095",
    primaryColorVariant: "#384b58",
    fontColor: "#ffffff"
  }
};
const DEFAULT_LOCATIONS = {
  topLeft: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "auto",
    bottom: "auto",
    zIndex: "1",
    transform: "none"
  },
  top: {
    position: "fixed",
    top: "0",
    left: "50%",
    right: "auto",
    bottom: "auto",
    zIndex: "1",
    transform: "translate(-50%, 0)"
  },
  topRight: {
    position: "fixed",
    top: "0",
    left: "auto",
    right: "0",
    bottom: "auto",
    zIndex: "1",
    transform: "none"
  },
  left: {
    position: "fixed",
    top: "50%",
    left: "0",
    right: "auto",
    bottom: "auto",
    zIndex: "1",
    transform: "translate(0, -50%)"
  },
  center: {
    position: "fixed",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    zIndex: "1",
    transform: "translate(-50%, -50%)"
  },
  right: {
    position: "fixed",
    top: "50%",
    left: "auto",
    right: "0",
    bottom: "auto",
    zIndex: "1",
    transform: "translate(0, -50%)"
  },
  bottomLeft: {
    position: "fixed",
    top: "auto",
    left: "0",
    right: "auto",
    bottom: "0",
    zIndex: "1",
    transform: "none"
  },
  bottom: {
    position: "fixed",
    top: "auto",
    left: "50%",
    right: "auto",
    bottom: "0",
    zIndex: "1",
    transform: "translate(-50%, 0)"
  },
  bottomRight: {
    position: "fixed",
    top: "auto",
    left: "auto",
    right: "0",
    bottom: "0",
    zIndex: "1",
    transform: "none"
  }
};
const Notification_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".notification-container.svelte-1mkihb5.svelte-1mkihb5{--border-radius:0.25rem;border-radius:var(--border-radius);background-color:var(--primary-color);box-shadow:0 2px 4px 0 var(--primary-color-variant);color:var(--font-color);min-width:min-content;width:100%;margin:0 auto}@media(min-width: 576px){.notification-container.svelte-1mkihb5.svelte-1mkihb5{max-width:70%}}@media(min-width: 768px){.notification-container.svelte-1mkihb5.svelte-1mkihb5{max-width:65%}}@media(min-width: 992px){.notification-container.svelte-1mkihb5.svelte-1mkihb5{max-width:55%}}@media(min-width: 1200px){.notification-container.svelte-1mkihb5.svelte-1mkihb5{max-width:50%}}.notification.svelte-1mkihb5.svelte-1mkihb5{border-radius:var(--border-radius);display:flex;align-items:center;gap:1rem;padding:0.25rem 0.25rem 0.25rem 1rem}.countdown.svelte-1mkihb5.svelte-1mkihb5{border-radius:var(--border-radius);border-bottom:solid var(--border-radius) var(--primary-color-variant);transform:scaleX(1);transform-origin:0% 50%;transition:transform 0s ease-in-out}.content.svelte-1mkihb5.svelte-1mkihb5{font-size:1.2rem;flex-grow:1}.content.svelte-1mkihb5 div.svelte-1mkihb5{word-break:break-all;overflow:hidden}.title.svelte-1mkihb5.svelte-1mkihb5{font-weight:bold}.close.svelte-1mkihb5.svelte-1mkihb5{align-self:flex-start}.close.svelte-1mkihb5 button.svelte-1mkihb5{padding:0;border:0;margin:0;box-shadow:none;background:none;cursor:pointer}",
  map: null
};
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = void 0 } = $$props;
  let { message = void 0 } = $$props;
  let { variant = void 0 } = $$props;
  let { variants = void 0 } = $$props;
  let { customIconSvg = void 0 } = $$props;
  let { customPrimaryColor = void 0 } = $$props;
  let { customPrimaryColorVariant = void 0 } = $$props;
  let { customFontColor = void 0 } = $$props;
  let { customWidth = void 0 } = $$props;
  let { showCloseButton = true } = $$props;
  let { autoDismissible = false } = $$props;
  let { showCountdown = false } = $$props;
  let { countdownDuration = 3e3 } = $$props;
  let { countdownStart = false } = $$props;
  let primaryColor = void 0;
  let primaryColorVariant = void 0;
  let fontColor = void 0;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.variants === void 0 && $$bindings.variants && variants !== void 0)
    $$bindings.variants(variants);
  if ($$props.customIconSvg === void 0 && $$bindings.customIconSvg && customIconSvg !== void 0)
    $$bindings.customIconSvg(customIconSvg);
  if ($$props.customPrimaryColor === void 0 && $$bindings.customPrimaryColor && customPrimaryColor !== void 0)
    $$bindings.customPrimaryColor(customPrimaryColor);
  if ($$props.customPrimaryColorVariant === void 0 && $$bindings.customPrimaryColorVariant && customPrimaryColorVariant !== void 0)
    $$bindings.customPrimaryColorVariant(customPrimaryColorVariant);
  if ($$props.customFontColor === void 0 && $$bindings.customFontColor && customFontColor !== void 0)
    $$bindings.customFontColor(customFontColor);
  if ($$props.customWidth === void 0 && $$bindings.customWidth && customWidth !== void 0)
    $$bindings.customWidth(customWidth);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.autoDismissible === void 0 && $$bindings.autoDismissible && autoDismissible !== void 0)
    $$bindings.autoDismissible(autoDismissible);
  if ($$props.showCountdown === void 0 && $$bindings.showCountdown && showCountdown !== void 0)
    $$bindings.showCountdown(showCountdown);
  if ($$props.countdownDuration === void 0 && $$bindings.countdownDuration && countdownDuration !== void 0)
    $$bindings.countdownDuration(countdownDuration);
  if ($$props.countdownStart === void 0 && $$bindings.countdownStart && countdownStart !== void 0)
    $$bindings.countdownStart(countdownStart);
  $$result.css.add(css$2);
  {
    {
      const ALL_VARIANTS = { ...DEFAULT_VARIANTS, ...variants };
      ({ primaryColor, primaryColorVariant, fontColor } = ALL_VARIANTS[ALL_VARIANTS.hasOwnProperty(variant) ? variant : "default"]);
      if (customPrimaryColor) {
        primaryColor = customPrimaryColor;
      }
      if (customPrimaryColorVariant) {
        primaryColorVariant = customPrimaryColorVariant;
      }
      if (customFontColor) {
        fontColor = customFontColor;
      }
    }
  }
  return `<div class="notification-container svelte-1mkihb5" style="${"--primary-color:" + escape(primaryColor, true) + "; --primary-color-variant:" + escape(primaryColorVariant, true) + "; --font-color:" + escape(fontColor, true) + "; " + escape(
    customWidth != null ? `width: ${customWidth}; max-width: 100%;` : "",
    true
  )}"><div class="notification svelte-1mkihb5"><div>${slots.icon ? slots.icon({}) : ` ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: variant,
      color: primaryColorVariant,
      customIconSvg,
      width: "32",
      height: "32"
    },
    {},
    {}
  )} `}</div> <div class="content svelte-1mkihb5">${slots.content ? slots.content({}) : ` ${title ? `<div class="title svelte-1mkihb5">${escape(title)}</div>` : ``} ${message ? `<div class="svelte-1mkihb5">${escape(message)}</div>` : ``} `}</div> <div class="close svelte-1mkihb5">${showCloseButton ?? true ? `<button type="button" title="Close" class="svelte-1mkihb5">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "close",
      color: primaryColorVariant
    },
    {},
    {}
  )}</button>` : ``}</div></div> ${autoDismissible && showCountdown ? `<div class="countdown svelte-1mkihb5"${add_styles({
    "transition-duration": `${countdownDuration ?? 3e3}ms`,
    "transform": countdownStart ? "scaleX(0)" : "scaleX(1)"
  })}></div>` : ``} </div>`;
});
const NotificationService_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".notifications-container.svelte-1sl64ve.svelte-1sl64ve{width:100%;margin-right:auto;margin-left:auto}.notifications-container.svelte-1sl64ve div.svelte-1sl64ve{margin:0.5rem}",
  map: null
};
const NotificationService = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { location = void 0 } = $$props;
  let { locations = void 0 } = $$props;
  let { notifications = [] } = $$props;
  let position = void 0;
  let top = void 0;
  let left = void 0;
  let right = void 0;
  let bottom = void 0;
  let zIndex = void 0;
  let transform = void 0;
  function push(notification) {
    const NOTIFICATION_ID = notifications.length > 0 ? Number(notifications[notifications.length - 1].id) + 1 : 0;
    notifications[notifications.length] = { id: NOTIFICATION_ID, ...notification };
  }
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.locations === void 0 && $$bindings.locations && locations !== void 0)
    $$bindings.locations(locations);
  if ($$props.notifications === void 0 && $$bindings.notifications && notifications !== void 0)
    $$bindings.notifications(notifications);
  if ($$props.push === void 0 && $$bindings.push && push !== void 0)
    $$bindings.push(push);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        const ALL_LOCATIONS = { ...DEFAULT_LOCATIONS, ...locations };
        ({ position, top, left, right, bottom, zIndex, transform } = ALL_LOCATIONS[ALL_LOCATIONS.hasOwnProperty(location) ? location : "top"]);
      }
    }
    $$rendered = `<div class="notifications-container svelte-1sl64ve"${add_styles({
      position,
      top,
      left,
      right,
      bottom,
      "z-index": zIndex,
      transform
    })}>${each(notifications, (notification) => {
      return `<div class="svelte-1sl64ve">${validate_component((notification.component ?? Notification) || missing_component, "svelte:component").$$render(
        $$result,
        {
          title: notification.title,
          message: notification.message,
          variant: notification.variant,
          variants: notification.variants,
          customIconSvg: notification.customIconSvg,
          customPrimaryColor: notification.customPrimaryColor,
          customPrimaryColorVariant: notification.customPrimaryColorVariant,
          customFontColor: notification.customFontColor,
          customWidth: notification.customWidth,
          showCloseButton: notification.showCloseButton,
          autoDismissible: notification.autoDismissible,
          showCountdown: notification.showCountdown,
          countdownDuration: notification.countdownDuration,
          countdownStart: notification.countdownStart
        },
        {
          title: ($$value) => {
            notification.title = $$value;
            $$settled = false;
          },
          message: ($$value) => {
            notification.message = $$value;
            $$settled = false;
          },
          variant: ($$value) => {
            notification.variant = $$value;
            $$settled = false;
          },
          variants: ($$value) => {
            notification.variants = $$value;
            $$settled = false;
          },
          customIconSvg: ($$value) => {
            notification.customIconSvg = $$value;
            $$settled = false;
          },
          customPrimaryColor: ($$value) => {
            notification.customPrimaryColor = $$value;
            $$settled = false;
          },
          customPrimaryColorVariant: ($$value) => {
            notification.customPrimaryColorVariant = $$value;
            $$settled = false;
          },
          customFontColor: ($$value) => {
            notification.customFontColor = $$value;
            $$settled = false;
          },
          customWidth: ($$value) => {
            notification.customWidth = $$value;
            $$settled = false;
          },
          showCloseButton: ($$value) => {
            notification.showCloseButton = $$value;
            $$settled = false;
          },
          autoDismissible: ($$value) => {
            notification.autoDismissible = $$value;
            $$settled = false;
          },
          showCountdown: ($$value) => {
            notification.showCountdown = $$value;
            $$settled = false;
          },
          countdownDuration: ($$value) => {
            notification.countdownDuration = $$value;
            $$settled = false;
          },
          countdownStart: ($$value) => {
            notification.countdownStart = $$value;
            $$settled = false;
          }
        },
        {}
      )} </div>`;
    })} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-fgib0u.svelte-fgib0u{color:#ececec;font-size:3em}main.svelte-fgib0u.svelte-fgib0u{text-align:center;padding:2em;position:relative}img.svelte-fgib0u.svelte-fgib0u{border:1px solid #ececec}.back-top.svelte-fgib0u.svelte-fgib0u{position:fixed;bottom:0;right:0;margin:1em;padding:0.5em;border-radius:0.5em;text-align:center;width:100px;transition:all 0.3s ease-in-out;border:none;background-color:#fff18b;outline:none;cursor:pointer}.content_frame.svelte-fgib0u.svelte-fgib0u{display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1em;justify-items:center}.search.svelte-fgib0u.svelte-fgib0u{display:flex;justify-content:center;align-items:center;margin:1em auto;gap:0.2em;width:100%;max-width:600px;position:relative}span.svelte-fgib0u.svelte-fgib0u{position:absolute;right:0;cursor:pointer;border:1px solid #ff6d6d;padding:0.3em;border-radius:100%}input[type='text'].svelte-fgib0u.svelte-fgib0u{width:100%;padding:0.5em;border-radius:0.5em;text-align:center;margin:1em auto;border:none;outline:none;font-size:1.1em}.type-selector.svelte-fgib0u.svelte-fgib0u{display:grid;grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));gap:1em;margin:1em auto}.item.svelte-fgib0u.svelte-fgib0u{width:300px;margin:1em;background-color:rgb(52, 52, 52);display:grid;grid-template-rows:1fr 0.5fr 1fr 0.5fr;padding:1em;gap:0.3em;border-radius:1em;place-items:center;color:#ececec}.item.svelte-fgib0u img.svelte-fgib0u{height:auto;border-radius:100%}.button.svelte-fgib0u.svelte-fgib0u{padding:0.5em;font-size:clamp(0.7em, 1em, 1.5em);border-radius:0.5em;text-align:center;width:100%;margin:1em;transition:all 0.3s ease-in-out;border:none;outline:none;cursor:pointer;text-transform:uppercase;background:none;color:#ececec;border:1px solid #ececec}a.svelte-fgib0u.svelte-fgib0u{text-decoration:none;color:black;font-weight:600}.creator.svelte-fgib0u.svelte-fgib0u,.creator.svelte-fgib0u .button.svelte-fgib0u{border:rgb(255, 92, 92) 2px solid}.creator.svelte-fgib0u .button.svelte-fgib0u:hover,.type-selector.svelte-fgib0u .creator.svelte-fgib0u:hover{background-color:rgb(255, 92, 92)}.cantanti.svelte-fgib0u.svelte-fgib0u,.cantanti.svelte-fgib0u .button.svelte-fgib0u{border:rgb(92, 255, 92) 2px solid}.cantanti.svelte-fgib0u .button.svelte-fgib0u:hover,.type-selector.svelte-fgib0u .cantanti.svelte-fgib0u:hover{background-color:rgb(92, 255, 92);color:#222}.famosi.svelte-fgib0u.svelte-fgib0u,.famosi.svelte-fgib0u .button.svelte-fgib0u{border:rgb(92, 92, 255) 2px solid}.famosi.svelte-fgib0u .button.svelte-fgib0u:hover,.type-selector.svelte-fgib0u .famosi.svelte-fgib0u:hover{background-color:rgb(92, 92, 255)}.film\\/tv.svelte-fgib0u.svelte-fgib0u,.film\\/tv.svelte-fgib0u .button.svelte-fgib0u{border:rgb(75, 255, 195) 2px solid}.film\\/tv.svelte-fgib0u .button.svelte-fgib0u:hover,.type-selector.svelte-fgib0u .film\\/tv.svelte-fgib0u:hover{background-color:rgb(75, 255, 195);color:#222}.videogiochi.svelte-fgib0u.svelte-fgib0u,.videogiochi.svelte-fgib0u .button.svelte-fgib0u{border:rgb(255, 255, 92) 2px solid}.videogiochi.svelte-fgib0u .button.svelte-fgib0u:hover,.type-selector.svelte-fgib0u .videogiochi.svelte-fgib0u:hover{background-color:rgb(255, 255, 92);color:#222}.altro.svelte-fgib0u.svelte-fgib0u,.altro.svelte-fgib0u .button.svelte-fgib0u{border:rgb(255, 190, 92) 2px solid}.altro.svelte-fgib0u .button.svelte-fgib0u:hover,.type-selector.svelte-fgib0u .altro.svelte-fgib0u:hover{background-color:rgb(255, 190, 92);color:#222}.reset.svelte-fgib0u.svelte-fgib0u{border:rgb(92, 16, 16) 2px solid;background-color:rgb(152, 40, 40)}.reset.svelte-fgib0u.svelte-fgib0u:hover{background-color:rgb(92, 16, 16);color:#ececec}@media(max-width: 600px){.type-selector.svelte-fgib0u.svelte-fgib0u{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let dataset = data.props.dataset.data;
  let filteredDataset = dataset;
  let inputFilter;
  let notficationService;
  let datasetToRender = filteredDataset;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    datasetToRender = filteredDataset;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-58h3mf_START -->${$$result.title = `<title>Lista modelli Italiani 🇮🇹</title>`, ""}<!-- HEAD_svelte-58h3mf_END -->`, ""} <main class="svelte-fgib0u"><h1 class="svelte-fgib0u" data-svelte-h="svelte-6wsmob">Lista dei modelli Italiani 🇮🇹</h1> <div class="search svelte-fgib0u"><input type="text" placeholder="Cerca per nome, tipo, autore o descrizione" class="svelte-fgib0u"${add_attribute("this", inputFilter, 0)}>   <span class="svelte-fgib0u" data-svelte-h="svelte-1t309ls">❌</span></div> <div class="type-selector svelte-fgib0u"><button class="button creator svelte-fgib0u" data-svelte-h="svelte-1fzd0xs">Content Creator</button> <button class="button cantanti svelte-fgib0u" data-svelte-h="svelte-1fi20nr">Cantanti</button> <button class="button famosi svelte-fgib0u" data-svelte-h="svelte-1m610jz">Personaggi Famosi</button> <button class="button film/tv svelte-fgib0u" data-svelte-h="svelte-gckvvv">Personaggi Cartoni di Film/TV</button> <button class="button videogiochi svelte-fgib0u" data-svelte-h="svelte-1lovouw">Videogiochi</button> <button class="button altro svelte-fgib0u" data-svelte-h="svelte-1buxquh">Altro</button> <button class="button reset svelte-fgib0u" data-svelte-h="svelte-13im5co">RESET</button></div> <div class="content_frame svelte-fgib0u">${each(datasetToRender, (item, i) => {
      return `<div class="${"item " + escape(item.tipo.split(" ")[item.tipo.split(" ").length - 2].toLowerCase(), true) + " svelte-fgib0u"}"><h2>${escape(item.strong_text)}</h2> <h3>${escape(item.tipo)}</h3> <p>${escape(item.autore)}</p> <p>${escape(item.descrizione)}</p> <img${add_attribute("src", item.img_src, 0)} alt="" class="svelte-fgib0u"> <a target="_blank" class="button svelte-fgib0u"${add_attribute("href", item.link, 0)}>Link</a> </div>`;
    })}</div> <button class="back-top svelte-fgib0u" data-svelte-h="svelte-193ucsd">BACK TOP</button> ${validate_component(NotificationService, "NotificationService").$$render(
      $$result,
      {
        location: "center",
        this: notficationService
      },
      {
        this: ($$value) => {
          notficationService = $$value;
          $$settled = false;
        }
      },
      {}
    )} </main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
