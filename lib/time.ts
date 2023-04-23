export function time() {
  return new Date().getTime();
}

export default function diffTime(created: string) {
  const createdDate = new Date(created);
  const diff = (time() - createdDate.getTime()) / 1000;
  let formattedTime = "";
  if (diff < 60) {
    formattedTime = "just now";
  } else if (diff < 60 * 60) {
    const minutes = Math.floor(diff / 60);
    formattedTime = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (diff < 60 * 60 * 24) {
    const hours = Math.floor(diff / (60 * 60));
    formattedTime = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(diff / (60 * 60 * 24));
    formattedTime = `${days} day${days > 1 ? "s" : ""} ago`;
  }

  return formattedTime;
}
