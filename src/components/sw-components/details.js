import React from 'react';
import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context";

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        >
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )
};

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
        {({ getPerson, getPersonImage }) => {
            return (
                <ItemDetails
                    itemId={itemId}
                    getData={getPerson}
                    getImageUrl={getPersonImage}
                >
                    <Record field="gender" label="Gender"/>
                    <Record field="eyeColor" label="Eye Color"/>
                </ItemDetails>
            )
        }}
    </SwapiServiceConsumer>
    )
};

const PlanetDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {({  getStarship, getStarshipImage }) => {
                return (
                    <ItemDetails
                    itemId={itemId}
                    getData={getStarship}
                    getImageUrl={getStarshipImage}
                    >
                    <Record field="model" label="Model"/>
                    <Record field="length" label="Length"/>
                    <Record field="costInCredits" label="Cost"/>
                    </ItemDetails>
                )
            }}

        </SwapiServiceConsumer>
    )
};

const StarshipDetails = ({ itemId }) => {
    return (


export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails
}