/*
 * GET /
 * Homepage
 */

exports.homepage = async (req, res) => {
  const locals = {
    title: "NoteCalandar NodeJs App",
    description: "Auth.2 Calandar Note App",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};
/*
 * GET /
 * Calendar
 */

// exports.cal = async (req, res) => {
//   const locals = {
//     title: "Calandar",
//     description: "Calandar App",
//   };

//   res.render("calendar", {
//     locals,
//     layout: "../views/layouts/calOutput",
//   });
// };
