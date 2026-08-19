type GeoFeature = {
    id: string;
    properties: {
        mag: number | null;
        place: string | null;
        time: number;
  };
}

type GeoFeatureResponse = {
    feature: GeoFeature[]
}