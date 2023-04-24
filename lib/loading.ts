// Loading Quote

const QUOTES = [
  "I hate it when my internet is slow. It's like waiting for a snail to finish a marathon.",
  "I'm not a great programmer; I'm just a good programmer with great habits.",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
  "Without requirements or design, programming is the art of adding bugs to an empty text file.",
  "Before software can be reusable it first has to be usable.",
  "The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.",
  "I think Microsoft named .Net so it wouldn't show up in a Unix directory listing.",
  "There are two ways to write error-free programs; only the third one works.",
  "Deleted code is debugged code.",
  "Walking on water and developing software from a specification are easy if both are frozen.",
  "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
  "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
  "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
  "Nine people can't make a baby in a month.",
  "If you think your users are idiots only idiots will use it.",
  "There are two major products that come out of Berkeley: LSD and UNIX. We don't believe this to be a coincidence.",
  "Perl – The only language that looks the same before and after RSA encryption.",
  "Random numbers should not be generated with a method chosen at random.",
  "The nice thing about standards is that there are so many to choose from.",
  "A complex system that works is invariably found to have evolved from a simple system that worked.",
  "Simplicity is prerequisite for reliability.",
  "Why did the website take so long to load? It was still buffering from the last time I opened it.",
  "I asked the internet to tell me a joke, but it said 'Error 404: Humor not found'.",
  "Why did the IT guy go to the beach? He wanted to surf the net.",
  "Make everything as simple as possible, but not simpler.",
  "Why did the programmer quit his job? He didn't get arrays.",
  "I wish there was a button on my computer that said 'Make the Internet Faster'.",
  "I tried to download some sarcasm onto my computer, but it said 'Insufficient memory'.",
];

export default function getRandomQuote(): string {
  const count = QUOTES.length;
  const index = Math.floor(Math.random() * count);

  return QUOTES[index];
}
