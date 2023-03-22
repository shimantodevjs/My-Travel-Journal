function TravelCharts(props){
    return(
        <section className="charts__section">
         <div className="img__container">
            <img src={`../img/${props.imgUrl}`} alt="" />
         </div>
         <div className="txt__container">
             <p className="country"><i class="fa-solid fa-location-dot"></i> {props.country}</p>
             <a href={props.mapUrl} className="map__url">view on google maps</a>
             <h3 className="location">{props.location}</h3>
             <h6 className="date">{`${props.startDate} - ${props.endDate}`}</h6>
             <p className="description">{props.description}</p>
         </div>
         </section>
    )
}

export default TravelCharts