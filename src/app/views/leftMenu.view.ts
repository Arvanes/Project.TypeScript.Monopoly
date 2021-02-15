export class LeftMenuView {
  readonly fields = document.querySelectorAll('.field');
  preview = document.getElementById(
    'previewImage',
  )! as HTMLImageElement;
  time = document.getElementById('time')!;
  cardInfo = document.getElementById("card-info")
}
