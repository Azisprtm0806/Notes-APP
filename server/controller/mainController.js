exports.homePage = async (req, res) => {
  const locals = {
    title: "Nodejs Notes",
    description: "Free NodeJs APP",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "About - Nodejs Notes",
    description: "Free NodeJs APP",
  };

  res.render("about", locals);
};
