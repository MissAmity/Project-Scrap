const SulfurExtractor = extend(GenericCrafter, "sulfur-extractor", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("industrial-sulfur-extractor");
		this.liquidRegion = Core.atlas.find("industrial-sulfur-extractor-liquid");
		this.BottomRegion = Core.atlas.find("industrial-sulfur-extractor-bottom");
		this.GlassRegion = Core.atlas.find("industrial-sulfur-extractor-top");
	}
});
SulfurExtractor.buildType = () => extend(GenericCrafter.GenericCrafterBuild, SulfurExtractor, {
	draw(tile){
		let inputLiquid = SulfurExtractor.consumes.get(ConsumeType.liquid).liquid;

		Draw.rect(SulfurExtractor.BottomRegion, this.x, this.y, 0);

		Draw.color(Liquids.oil.color);
		Draw.alpha(this.liquids.get(inputLiquid) / SulfurExtractor.liquidCapacity);
		Draw.rect(SulfurExtractor.liquidRegion, this.x, this.y);

		Draw.alpha(1);
		Draw.color();
		Draw.rect(SulfurExtractor.GlassRegion, this.x, this.y, 0);
	}
});

const AcidMixer = extend(GenericCrafter, "acid-sulfuric-mixer", {
	load(){
		this.super$load();
		this.region = Core.atlas.find("industrial-acid-sulfuric-mixer");
		this.liquidRegion = Core.atlas.find("industrial-acid-sulfuric-mixer-liquid");
		this.BottomRegion = Core.atlas.find("industrial-acid-sulfuric-mixer-bottom");
		this.GlassRegion = Core.atlas.find("industrial-acid-sulfuric-mixer-top");
	}
});
AcidMixer.buildType = () => extend(GenericCrafter.GenericCrafterBuild, AcidMixer, {
	draw(tile){
		let inputLiquid = AcidMixer.consumes.get(ConsumeType.liquid).liquid;

		Draw.rect(AcidMixer.BottomRegion, this.x, this.y, 0);

		Draw.color(Color.valueOf("88bdbd"));
		Draw.alpha(this.liquids.get(AcidMixer.outputLiquid.liquid) / AcidMixer.liquidCapacity);
		Draw.rect(AcidMixer.liquidRegion, this.x, this.y);

		Draw.alpha(1);
		Draw.color();
		Draw.rect(AcidMixer.GlassRegion, this.x, this.y, 0);
	}
});
