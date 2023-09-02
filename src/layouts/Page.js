import React from "react";
import { Routes, Route } from 'react-router-dom'

import '../css/Page.css'

import HomePage from '../pages/HomePage';

import AboutPage from '../pages/AboutPage';

import CoachPage from '../pages/CoachPage';
import CoachGalleryPage from '../pages/CoachGalleryPage';
import DisabledPage from '../pages/DisabledPage';

import CargoPage from "../pages/CargoPage";
import CargoGalleryPage from "../pages/CargoGalleryPage";
import CargoOfferPage from "../pages/CargoOfferPage";

import InspectionPage from '../pages/InspectionPage';
import InspectionGalleryPage from '../pages/InspectionGalleryPage';
import InspectionOfferPage from '../pages/InspectionOfferPage';

import ServicePage from '../pages/ServicePage';
import ServiceGalleryPage from '../pages/ServiceGalleryPage';
import ServiceOfferPage from '../pages/ServiceOfferPage';

import ContactPage from '../pages/ContactPage';

import ErrorPage from "../pages/ErrorPage";


const Page = (props) => (
    <section className="contentArea">
        <Routes>
            <Route
                path="/"
                element={<HomePage
                    mainPageChanged={props.mainPageChanged}
                />}
            />
            <Route
                path="/about"
                element={<AboutPage
                    mainPageChanged={props.mainPageChanged}
                />}
            />
            <Route
                path="/coach"
                element={<CoachPage
                    mainPageChanged={props.mainPageChanged}
                />}
            />
            <Route
                path="/coach/cars"
                element={<CoachGalleryPage
                    mainPageChanged={props.mainPageChanged}
                />}
            />
            <Route
                path="/coach/disabled"
                element={<DisabledPage
                    mainPageChanged={props.mainPageChanged}
                />}
            />
            <Route path="/cargo/*" element={<CargoPage
                mainPageChanged={props.mainPageChanged}
            />}>
                <Route path="cars" element={<CargoGalleryPage />} />
                <Route path="offer" element={<CargoOfferPage />} />
            </Route>
            <Route path="/inspection/*" element={<InspectionPage
                mainPageChanged={props.mainPageChanged}
            />}>
                <Route path="gallery" element={<InspectionGalleryPage />} />
                <Route path="offer" element={<InspectionOfferPage />} />
            </Route>
            <Route path="/service/*" element={<ServicePage
                mainPageChanged={props.mainPageChanged}
            />}>
                <Route path="gallery" element={<ServiceGalleryPage />} />
                <Route path="offer" element={<ServiceOfferPage />} />
            </Route>
            <Route path="/contact" element={<ContactPage
                mainPageChanged={props.mainPageChanged}
            />} />
            <Route path="*" element={<ErrorPage
                mainPageChanged={props.mainPageChanged}
            />} />
        </Routes>
    </section>

)

export default Page;