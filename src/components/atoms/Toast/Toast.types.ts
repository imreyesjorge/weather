export type ToastProps = {
  title: string;
  desc: string;
  type: ToastType;
};

export enum ToastType {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}
