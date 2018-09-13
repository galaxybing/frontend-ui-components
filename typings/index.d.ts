// TypeScript Version: 2.3

/// <reference types="react" />
/// 
/// <reference path="custom-typings.d.ts" />

declare module "@317hu" {
  export import i18n = ElementReact.i18n
  export import Button = ElementReact.Button
}

declare module "@317hu/next" {
  export import i18n = ElementReact.i18n
  export import Button = ElementReact.Button
}

declare namespace ElementReact {
  type typeColor = 'success' | 'info' | 'warning'
  type I18nLang = any
  // i18n
  interface I18n {
    // TODO: set lang type
    use(lang: I18nLang): void
    // TODO: set options type
    t(path: string, options: any): string
  }
  export const i18n: I18n

  // Button
  interface ButtonProps extends ElementReactLibs.ComponentProps<{}> {
    onClick?(e: React.SyntheticEvent<HTMLButtonElement>): void
    type?: typeColor | 'danger' | 'primary' | 'text'
    size?: 'large' | 'small' | 'mini'
    icon?: string
    nativeType?: 'button' | 'submit' | 'reset'
    loading?: boolean
    disabled?: boolean
    plain?: boolean
  }
  class ButtonGroup extends ElementReactLibs.Component<{}, {}> { }
  export class Button extends ElementReactLibs.Component<ButtonProps, {}> {
    static Group: typeof ButtonGroup
  }
}

declare namespace ElementReactLibs {
  type dateType = Date | string | null 
  type SelectionMode = 'year' | 'month' | 'week' | 'day'
  interface ComponentProps<T> {
    className?: string
    style?: React.CSSProperties
  }
  class Component<P, S> extends React.Component<P, S> {
    classNames?(...args: any[]): any
    className?(...args: any[]): any
    style?(agrs?: any): any
  }
  interface DatePickerBaseProps extends ComponentProps<{}> {
    align?: 'left' | 'center' | 'right'
    format?: string
    isShowTrigger?: boolean
    isReadOnly?: boolean
    isDisabled?: boolean
    placeholder?: string
    onFocus?(self?: any): void
    onBlur?(self?: any): void
    onChange?(value?: any): void
    value?: dateType | dateType[]
  }
  interface DatePanelProps extends DatePickerBaseProps {
    value?: dateType | dateType[]
    onPick?: (date: Date) => void
    isShowTime?: boolean
    showWeekNumber?: boolean
    format?: string
    shortcuts?: any[]
    selectionMode?: SelectionMode
    disabledDate?(date?: Date, type?: SelectionMode): boolean
    firstDayOfWeek?: number
    getPopperRefElement?: any
    popperMixinOption?: any
  }
  class DatePickerBaseComponet<P, S> extends React.Component<P, S> { }
}

declare module "@317hu/src/locale/lang/bg" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/ca" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/cz" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/da" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/de" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/el" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/en" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/es" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/fa" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/fi" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/fr" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/id" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/it" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/ja" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/ko" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/nb-NO" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/nl" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/pl" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/pt-br" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/pt" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/ru-RU" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/sk" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/sv-SE" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/th" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/tk" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/tr-TR" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/ua" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/vi" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/zh-CN" {
  const lang: ElementReact.I18nLang
  export default lang
}
declare module "@317hu/src/locale/lang/zh-TW" {
  const lang: ElementReact.I18nLang
  export default lang
}
