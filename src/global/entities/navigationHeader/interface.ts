export interface NavigationHeader {
  title: string;
  hasTitle: boolean
  shouldRenderHeader: boolean
  navigationHistory: NavigationHeader[]
}

export interface NavigationHeaderInput {
  navigationHistory: NavigationHeader[]
  title?: string;
  hasTitle?: boolean
  shouldRenderHeader?: boolean
}

export interface NavigationHeaderGlobalState {
  navigationHeader: NavigationHeader;
  setNavigationHeaderProps: (newNavigationHeaderProps: NavigationHeaderInput) => void;
}
