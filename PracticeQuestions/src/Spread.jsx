const MobileBrand = (Mobile) => {
    return(
<>
        <h1>Mobiles Brands</h1>
        <p>Name:{Mobile.name}</p>
        <p>Model:{Mobile.model}</p>
        <p>RAM:{Mobile.RAM}</p>
        <p>ROM:{Mobile.ROM}</p>
        <p>Available:{Mobile.Available}</p>
        </>

    );
}
export default MobileBrand;