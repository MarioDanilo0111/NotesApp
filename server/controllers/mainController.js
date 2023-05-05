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
 * About
 */

exports.cal = async (req, res) => {
  const locals = {
    title: "About Calandar",
    description: "Calandar App",
  };

  res.render("calendar", {
    locals,
    layout: "../views/layouts/calOutput",
  });
};
