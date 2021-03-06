// TODO: Discuss if we should export every class or only the Route class.

export class TrackPoint {
    constructor(latitude, longitude, elevation) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.elevation = elevation;
    }
}

export class Waypoint {
    constructor(name, description, latitude, longitude, elevation) {
        this.name = name; 
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.elevation = elevation;
    }
}

export class Resource {
    
    constructor(resourceUrl) {
        this.resourceUrl = resourceUrl;

        let aux= resourceUrl.split(".")
        this.extension = aux[aux.length -1].toLowerCase()

    }

    isAudio(){
        return this.extension === "mp3"
    }
    isImage(){
        return this.extension === "jpg" || this.extension === "png" || this.extension === "gif" || this.extension === "jpeg"
    }
    isVideo(){
        return this.extension === "mp4"
    }
}

// TODO: Discuss and create comment structure
export class Comment {
    constructor(resourceUrl) {
        this.resourceUrl = resourceUrl;
    }
}


// TODO: Discuss and create comment structure
export class CommentEntity {
    constructor(text, dateCreated, author) {
        this.text = text;
        this.dateCreated = dateCreated;
        this.author = author;
    }
}


export class Route {

    /**
     * You are supposed to pass a map with all the necessary information
     * @param {*} params 
     * 
     * Note the ifs due to the possibility of ommiting data and provide them afeterwards
     */
    constructor(params) {

        if (params.name){
            this.name = params.name;
        }

        if (params.description){
            this.description=params.description;
        }

        if (params.itinerary){
            this.itinerary = params.itinerary;
        }

        if (params.comments){
            this.comments = params.comments;
        }

        if (params.resources){
            this.resources = params.resources;
        }

        if (params.commentList){
            this.commentList=params.commentList; // Parsed Comments list
        }
    }
    
    addWaypoints(waypoints) {
        this.waypoints = waypoints
    }  

}