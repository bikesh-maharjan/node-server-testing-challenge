const db = require("../knexConfig");

const Foods = require("../foods/foodsModel");

describe("foods", () => {
  beforeEach(async () => {
    await db("foods").truncate();
  });
  describe("add()", () => {
    it("should add the provied foods into the db", async () => {
      await Foods.add({ name: "Apple Pie" });
      await Foods.add({ name: "Pizza" });
      const foods = await db("foods");

      expect(foods).toHaveLength(2);
    });
    it("should not add this food", async () => {
      await Foods.add({ fruits: "banana" });

      const foods = await db("foods");
      expect(foods).toHaveLength(0);
    });
  });
  describe("remove()", () => {
    it("should remove foods", async () => {
      await Foods.add({ name: "Apple Pie" });
      await Foods.add({ name: "Pizza" });
      await Foods.remove(1);
      const foods = await db("foods");

      expect(foods).toHaveLength(1);
    });
    it('should not remove any foods',async()=>{
        await Foods.add({name:'Apple Pie'})
        await Foods.add({name: "Pizza"})

        await Foods.remove('Apple Pie')
        const foods = await db('foods')

        expect(foods).toHaveLength(2)

    })
  });
});
