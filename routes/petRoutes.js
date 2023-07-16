const router = require("express").Router();
const {
  getAllPet,
  getPetById,
  createPet,
  updatePetById,
  deletePetById,
} = require("../controllers/pet");
const Pet = require("../models/Pet");

// GET / get all Pets
router.get("/", getAllPet);

// GET /:id get Pet by id
router.get("/:id", getPetById);

// POST / create Pet
router.post("/", createPet);

// PUT /:id update Pet by id
router.put("/:id", updatePetById);

// DELETE /:id delete Pet by id
router.delete("/:id", deletePetById);

module.exports = router;

//seed database
router.get("/data/seed", async (req, res) => {
  const data = [
    {
      petType: "Cat",
      petName: "Siobhan",
      isAdopted: false,
      gender: "Female",
      breed: "Tuxedo",
      color: "Black and White",
      age: "Kitten (< 1 year)",
      image:
        "https://img.freepik.com/free-vector/cute-dog-cute-cat-cartoon-illustration_138676-3238.jpg",
      bio: "Loves tuna treats, laser pointers, and summoning otherworldly forces",
    },
    {
      petType: "Dog",
      petName: "Boe",
      isAdopted: true,
      gender: "Male",
      breed: "Mastiff mix",
      color: "Brindle",
      age: "Adult (2-6 years)",
      image:
        "https://img.freepik.com/free-vector/cute-dog-cute-cat-cartoon-illustration_138676-3238.jpg",
      bio: "Loves cuddles and fortune-telling. Up for any adventure!",
    },
    {
      petType: "Dog",
      petName: "Captain",
      isAdopted: false,
      gender: "Male",
      breed: "Lab mix",
      color: "Brown",
      age: "Senior (6+ years)",
      image:
        "https://img.freepik.com/free-vector/cute-dog-cute-cat-cartoon-illustration_138676-3238.jpg",
      bio: "Just vibin'. Will fetch anything. Ball. Shoes. Thor's Hammer.",
    },
    {
      petType: "Cat",
      petName: "Tofu",
      isAdopted: true,
      gender: "Female",
      breed: "Calico",
      color: "Black, White, Orange",
      age: "Adult (2-6 years)",
      image:
        "https://img.freepik.com/free-vector/cute-dog-cute-cat-cartoon-illustration_138676-3238.jpg",
      bio: "Sleep all day! Party all night!",
    },
    {
      petType: "Dog",
      petName: "Jim-Jam",
      isAdopted: false,
      gender: "Male",
      breed: "Heeler mix",
      color: "Gray",
      age: "Senior (6+ years)",
      image:
        "https://img.freepik.com/free-vector/cute-dog-cute-cat-cartoon-illustration_138676-3238.jpg",
      bio: "Nothing slows me down in my old age!",
    },
  ];

  await Pet.insertMany(data);
  res.status(303).redirect("/pets");
});
