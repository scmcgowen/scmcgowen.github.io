ServerEvents.recipes((event) => {
	event.recipes.create.emptying(
		[Fluid.of("kubejs:soul_tears", 500), "minecraft:obsidian"],
		"minecraft:crying_obsidian",
	);
	event.recipes.create.emptying(
		[Fluid.of("kubejs:nuclear_waste", 1000), "minecraft:barrel"],
		"cogutilities:waste_barrel",
	);
	event.recipes.createFilling("pneumaticcraft:transistor", [
		Fluid.of("pneumaticcraft:plastic", 1000),
		"kubejs:incomplete_transistor",
	]);
	event.recipes.createFilling("pneumaticcraft:capacitor", [
		Fluid.of("pneumaticcraft:plastic", 1000),
		"kubejs:incomplete_capacitor",
	]);
	event.recipes.createFilling("numismatics:vendor", [
		Fluid.of("kubejs:molten_steel", 500),
		"createdieselgenerators:asphalt_block",
	]);
	event.recipes.createFilling("cogutilities:waste_barrel", [
		Fluid.of("kubejs:nuclear_waste", 1000),
		"minecraft:barrel",
	]);
	event.recipes.createFilling('minecraft:crimson_nylium', [
		Fluid.of('kubejs:crimson_essence', 100),
		'minecraft:netherrack'
	]);
	event.recipes.createFilling('minecraft:warped_nylium', [
		Fluid.of('kubejs:soul_tears', 100),
		'minecraft:netherrack'
	]);
});
