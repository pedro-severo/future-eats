export interface NavigationHeader {
  title: string;
  hasTitle: boolean
  shouldRenderHeader: boolean
  navigationHistory: NavigationHeader[]
}

export interface NavigationHeaderInput {
  title?: string;
  hasTitle?: boolean
  shouldRenderHeader?: boolean
  navigationHistory?: NavigationHeader[]

}

export interface NavigationHeaderGlobalState {
  navigationHeader: NavigationHeader;
  setNavigationHeaderProps: (newNavigationHeaderProps: NavigationHeaderInput) => void;
}
