// Creating dummy data 
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

//to get resource by id
module.exports.getResourceByid = async function (req, res) {
  try {
    let resource = await resources.find(
      (resource) => resource.id == parseInt(req.params.id)
    );
    if (!resource) {
      res.sendStatus(404);
    }
    res.send(resource);
  } catch (err) {
    console.log(err);
    return;
  }
};

//to get all resources
module.exports.getAllResource = async function (req, res) {
  try {
    res.json(resources);
  } catch (err) {
    console.log(err);
    return;
  }
};

//to create resource
module.exports.create = async function (req, res) {
  try {
    const resource = {
      id: resources.length + 1,
      name: req.body.name,
      email: req.body.email,
      points: req.body.points,
      completed: req.body.completed,
    };
    if (!resource.name) {
      res.sendStatus(400);
    } else {
      resources.push(resource);
      res.status(201).send(resource);
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

//to update resource
module.exports.updateResource = async function (req, res) {
  try {
    const resourceId = req.params.id;
    const resource = resources.find((resource) => resource.id == resourceId);
    resource.name = req.body.name;
    resource.completed = req.body.completed;
    res.status(200).send(resource);
  } catch (err) {
    console.log(err);
    return;
  }
};

//to delete resource by id
module.exports.deleteResource = async function (req, res) {
  try {
    const resourceId = parseInt(req.params.id);
    const resource = resources.find((resource) => resource.id == resourceId);
    if (!resource) {
      res.sendStatus(404);
    }
    const index = resources.indexOf(resource);
    resources.splice(index, 1);
    res.status(200).send(resource);
  } catch (err) {
    console.log(err);
    return;
  }
};
