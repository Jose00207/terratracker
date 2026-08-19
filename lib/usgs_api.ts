export async function getData(){
    const data = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2026-01-01&endtime=2026-08-16&minmagnitude=4.0&maxmagnitude=10&orderby=time&limit=100');
    return data.json()
    /* return {"features": [
    {
      "type": "Feature",
      "properties": {
        "mag": 5,
        "place": "89 km ESE of Kokopo, Papua New Guinea",
        "time": 1786480288580,
        "updated": 1786511209140,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tk29",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tk29&format=geojson",
        "felt": 1,
        "cdi": 3.1,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 385,
        "net": "us",
        "code": "6000tk29",
        "ids": ",us6000tk29,usauto6000tk29,",
        "sources": ",us,usauto,",
        "types": ",dyfi,internal-moment-tensor,origin,phase-data,",
        "nst": 121,
        "dmin": 0.975,
        "rms": 1,
        "gap": 80,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 5.0 - 89 km ESE of Kokopo, Papua New Guinea"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [152.9875, -4.7193, 68.887]
      },
      "id": "us6000tk29"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5.1,
        "place": "51 km E of Tobelo, Indonesia",
        "time": 1786479258452,
        "updated": 1786480198040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tk1y",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tk1y&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 400,
        "net": "us",
        "code": "6000tk1y",
        "ids": ",us6000tk1y,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 68,
        "dmin": 5.945,
        "rms": 0.97,
        "gap": 103,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 5.1 - 51 km E of Tobelo, Indonesia"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [128.4742, 1.7064, 10]
      },
      "id": "us6000tk1y"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5,
        "place": "107 km WNW of Kerema, Papua New Guinea",
        "time": 1786467978902,
        "updated": 1786469649040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tk0a",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tk0a&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 385,
        "net": "us",
        "code": "6000tk0a",
        "ids": ",us6000tk0a,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 53,
        "dmin": 2.877,
        "rms": 0.89,
        "gap": 98,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 5.0 - 107 km WNW of Kerema, Papua New Guinea"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [144.8583, -7.6341, 10]
      },
      "id": "us6000tk0a"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5.1,
        "place": "232 km SSW of Pagar Alam, Indonesia",
        "time": 1786381686809,
        "updated": 1786382657040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tjqj",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tjqj&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 400,
        "net": "us",
        "code": "6000tjqj",
        "ids": ",us6000tjqj,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 49,
        "dmin": 1.672,
        "rms": 0.82,
        "gap": 182,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 5.1 - 232 km SSW of Pagar Alam, Indonesia"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [102.3607, -5.9347, 21.72]
      },
      "id": "us6000tjqj"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5,
        "place": "16 km W of San José del Palmar, Colombia",
        "time": 1786367890451,
        "updated": 1786418844052,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tjm4",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tjm4&format=geojson",
        "felt": 4,
        "cdi": 3.4,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 386,
        "net": "us",
        "code": "6000tjm4",
        "ids": ",us6000tjm4,",
        "sources": ",us,",
        "types": ",dyfi,origin,phase-data,",
        "nst": 115,
        "dmin": 1.542,
        "rms": 1.03,
        "gap": 87,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 5.0 - 16 km W of San José del Palmar, Colombia"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-76.3859, 4.8971, 98.522]
      },
      "id": "us6000tjm4"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 7.4,
        "place": "5 km S of San José del Palmar, Colombia",
        "time": 1786365268125,
        "updated": 1786817779028,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tjl2",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tjl2&format=geojson",
        "felt": 1168,
        "cdi": 7.9,
        "mmi": 7.999,
        "alert": "red",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 2790,
        "net": "us",
        "code": "6000tjl2",
        "ids": ",us6000tjl2,usauto6000tjl2,attjk09g,pt26222000,",
        "sources": ",us,usauto,at,pt,",
        "types": ",dyfi,event-sequence,finite-fault,general-text,ground-failure,internal-moment-tensor,internal-origin,losspager,moment-tensor,oaf,origin,phase-data,shakemap,",
        "nst": 151,
        "dmin": 1.515,
        "rms": 0.86,
        "gap": 19,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 7.4 - 5 km S of San José del Palmar, Colombia"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-76.2422, 4.8436, 110.285]
      },
      "id": "us6000tjl2"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5,
        "place": "northern Mid-Atlantic Ridge",
        "time": 1786363942220,
        "updated": 1786365137040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tjl0",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tjl0&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 385,
        "net": "us",
        "code": "6000tjl0",
        "ids": ",usauto6000tjl0,us6000tjl0,",
        "sources": ",usauto,us,",
        "types": ",internal-moment-tensor,origin,phase-data,",
        "nst": 67,
        "dmin": 14.006,
        "rms": 0.95,
        "gap": 130,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 5.0 - northern Mid-Atlantic Ridge"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-45.8376, 17.5068, 10]
      },
      "id": "us6000tjl0"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5.5,
        "place": "east central Pacific Ocean",
        "time": 1786340504224,
        "updated": 1786427259637,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tjjj",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tjjj&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": 0,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 465,
        "net": "us",
        "code": "6000tjjj",
        "ids": ",usauto6000tjjj,us6000tjjj,",
        "sources": ",usauto,us,",
        "types": ",internal-moment-tensor,losspager,origin,phase-data,shakemap,",
        "nst": 83,
        "dmin": 23.284,
        "rms": 1.02,
        "gap": 60,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 5.5 - east central Pacific Ocean"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-114.648, 0.3112, 10]
      },
      "id": "us6000tjjj"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5,
        "place": "206 km SE of Sarangani, Philippines",
        "time": 1786313847839,
        "updated": 1786334064040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tji3",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tji3&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 385,
        "net": "us",
        "code": "6000tji3",
        "ids": ",us6000tji3,",
        "sources": ",us,",
        "types": ",origin,phase-data,",
        "nst": 87,
        "dmin": 3.165,
        "rms": 0.91,
        "gap": 71,
        "magType": "mb",
        "type": "earthquake",
        "title": "M 5.0 - 206 km SE of Sarangani, Philippines"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [126.8342, 4.1417, 35]
      },
      "id": "us6000tji3"
    },
    {
      "type": "Feature",
      "properties": {
        "mag": 5.3,
        "place": "197 km SSW of Pagar Alam, Indonesia",
        "time": 1786288503956,
        "updated": 1786362946040,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000tjfj",
        "detail": "https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=us6000tjfj&format=geojson",
        "felt": null,
        "cdi": null,
        "mmi": null,
        "alert": null,
        "status": "reviewed",
        "tsunami": 0,
        "sig": 432,
        "net": "us",
        "code": "6000tjfj",
        "ids": ",usauto6000tjfj,us6000tjfj,",
        "sources": ",usauto,us,",
        "types": ",internal-moment-tensor,moment-tensor,origin,phase-data,",
        "nst": 67,
        "dmin": 1.41,
        "rms": 0.76,
        "gap": 71,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 5.3 - 197 km SSW of Pagar Alam, Indonesia"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [102.8866, -5.7782, 35]
      },
      "id": "us6000tjfj"
    }
  ],} */
}

export async function getLatest(){
  const data = await fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson`);
  return data.json();
}

export async function getByTime(year1: String, month1: String, day1: String, year2: String, month2: String, day2: String, limit: String){
  const data = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2026-01-01&endtime=2026-08-16&minmagnitude=4.0&maxmagnitude=10&orderby=time&limit=100`)
}