export default function Footer() {
  return (
    <footer className="mx-auto absolute bottom-0 text-sm text-pink w-full px-6 py-8 bg-primary-2 flex justify-start items-center">
      <span className="text-primary">Made by&nbsp;</span>
      <a href="https://www.twitter.com/vitHoracek" className="font-semibold transition-colors duration-200 hover:text-violet" aria-label="Vit horacek Twitter link">
        Vít Horáček
      </a>
    </footer>
  );
}
