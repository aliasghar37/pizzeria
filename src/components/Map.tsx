import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const center: LatLngExpression = [30.3014442, 71.375184];
    const locations = [
        {
            position: [24.79934, 67.034825] as LatLngExpression,
            address: "DHA Phase 5, Karachi",
        },
        {
            position: [31.502367, 74.310688] as LatLngExpression,
            address: "Canal road, Lahore",
        },
        {
            position: [33.711898, 73.08719] as LatLngExpression,
            address: "G-6, Islamabad",
        },
        {
            position: [30.170319, 66.991608] as LatLngExpression,
            address: "Sariab road, Quetta",
        },
        {
            position: [33.982953, 71.447012] as LatLngExpression,
            address: "Habib Jalib road, Peshawar",
        },
    ];

    return (
        <MapContainer
            center={center}
            zoom={5}
            minZoom={4}
            scrollWheelZoom={false}
            className="w-[50%] max-md:w-[90%] max-lg:w-[90%] h-96 max-md:h-[24rem] max-sm:w-[100%] max-sm:h-72 place-self-center bg-secondary rounded-lg border-2 border-borderColor  "
        >
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {locations.map((city) => {
                return (
                    <Marker position={city.position}>
                        <Popup>{city.address}</Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};
export default Map;
