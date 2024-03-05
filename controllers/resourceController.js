let resources = [
  { id: 1, name: "Html", email: "html@gmail.com", completed: true, points: 40 },
  { id: 2, name: "Css", email: "css@gmail.com", completed: true, points: 40 },
  {
    id: 3,
    name: "JavaScript",
    email: "javascript@gmail.com",
    completed: true,
    points: 40,
  },
];

module.exports.getResourceByid = async function (req, res) {
  try {
    let resource = await resources.find(
      (resource) => resource.id == req.params.id
    );
    res.send(resource);
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.getAllResource = async function (req, res) {
  try {
    res.send(resources);
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.create = async function (req, res) {
  try {
    const resource = {
      id: resources.length + 1,
      name: req.body.name,
      email: req.body.email,
      points: req.body.points,
      completed: req.body.completed,
    };
    resources.push(resource);
    res.status(201).send(resource);
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.updateResource = async function (req, res) {
  try {
    const resourceId = req.params.id;
    const resource = resources.find((resource) => resource.id == resourceId);
    resource.name = req.body.name;
    resource.completed = req.body.completed;
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.deleteResource = async function (req, res) {
  try {
    const resourceId = req.params.id;
    const resource = resources.find((resource) => resource.id == resourceId);

    const index = resources.indexOf(resource);
    resources.splice(index, 1);
    res.send(resource);
  } catch (err) {
    console.log(err);
    return;
  }
};
