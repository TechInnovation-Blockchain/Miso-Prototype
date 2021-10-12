// <======= layout interfaces =======>
export interface MobileSidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface NavbarProps {
  setOpen: (open: boolean) => void;
}

export interface ContentItems {
  title: string;
  url: string;
}

export interface ItemProps {
  title: string;
  content?: ContentItems[];
}

export interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

// <======= overview interfaces =======>
export interface BtnProps {
  img: string;
  title: string;
  time: string;
}

// <======= past sales interfaces =======>
export interface ChartProps {
  chartData: any;
}
