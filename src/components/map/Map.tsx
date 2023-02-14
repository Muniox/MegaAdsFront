import React, {useContext, useEffect, useState} from 'react';
import './Map.pcss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { SearchContext } from '../../context/searchContext';
import {SimpleAdEntity} from 'types';

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] =  useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {

        })();
    },[search]);

    return (
        <div className="map">
            <MapContainer center={[50.2655229,18.9938733]} zoom={20}>
                <TileLayer 
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[50.2655229,18.9938733]}>
                    <Popup>
                        <h2>IT.focus</h2>
                        <p>Super firma programistyczna!</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};