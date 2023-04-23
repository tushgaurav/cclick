export default function PasteForm() {
  return (
    <form action="/api/paste" method="post">
      <label htmlFor="first">Paste Title</label>
      <input type="text" id="title" name="title" />

      <label htmlFor="content">Content</label>
      <input type="text" id="content" name="content" required />

      <button type="submit">Submit</button>
    </form>
  );
}
// <form>
//   <label>
//     Title:
//     <input
//       name="name"
//       type="text"
//       value={title}
//       onChange={(e) => setTitle(e.target.value)}
//       required
//     />
//   </label>

//   <label>
//     Content:
//     <textarea
//       name="content"
//       value={content}
//       onChange={(e) => setContent(e.target.value)}
//       required
//     />
//   </label>
// </form>
//   );
// }
