import axios from "axios";
import { getReactionByAreaId } from "../Utils/researchDB";
import { Reaction } from "../Models/tables";

interface Collection {
  id: string;
  title: string;
  description?: string;
}

class Unsplash {
  static readonly apiUrl: string = "https://api.unsplash.com";


  static async createCollection(areaId: number, accessToken: string): Promise<void> {
    const reaction: Reaction = await getReactionByAreaId(areaId);

    try {
      const response = await axios.post(
        `${this.apiUrl}/collections`,
        { title: reaction.extraData.title, description: reaction.extraData.description },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Collection created successfully");
    } catch (error) {
      console.error("Error creating collection: ", error);
    }
  }

  static async updateCollection(areaId: number, accessToken: string): Promise<void> {
    const reaction: Reaction = await getReactionByAreaId(areaId);
    const id = reaction.extraData.collectionId;
    const title = reaction.extraData.title;
    const description = reaction.extraData.descriptio;

    try {
      const response = await axios.put(
        `${this.apiUrl}/collections/${id}`,
        { title: title, description: description },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("Collection updated successfully");
    } catch (error) {
      console.error("Error updating collection: ", error);
    }
  }

  static async deleteCollection(areaId: number, accessToken: string): Promise<void> {
    const reaction: Reaction = await getReactionByAreaId(areaId);

    try {
      await axios.delete(`${this.apiUrl}/collections/${reaction.extraData.collectionId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Collection deleted successfully");
    } catch (error) {
      console.error("Error deleting collection: ", error);
    }
  }

  static async likePhoto(areaId: number, accessToken: string): Promise<void> {
    const reaction: Reaction = await getReactionByAreaId(areaId);

    try {
      await axios.post(`${this.apiUrl}/photos/${reaction.extraData.photoId}/like`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Photo liked successfully");
    } catch (error) {
      console.error("Error liking Photo: ", error);
    }
  }

  static async unlikePhoto(areaId: number, accessToken: string): Promise<void> {
    const reaction: Reaction = await getReactionByAreaId(areaId);

    try {
      await axios.delete(`${this.apiUrl}/photos/${reaction.extraData.photoId}/like`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Photo unliked successfully");
    } catch (error) {
      console.error("Error unliking Photo: ", error);
    }
  }

  static async addPhotoToCollection(areaId: number, accessToken: string): Promise<void> {
    const reaction: Reaction = await getReactionByAreaId(areaId);

    try {
      await axios.post(`${this.apiUrl}/collections/${reaction.extraData.collectionId}/add`, {
        collection_id: reaction.extraData.collectionId,
        photo_id: reaction.extraData.photoId
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Photo added to collection successfully");
    } catch (error) {
      console.error("Error adding photo from collection Photo: ", error);
    }
  }

  static async removePhotoFromCollection(areaId: number, accessToken: string): Promise<void> {
    const reaction: Reaction = await getReactionByAreaId(areaId);

    try {
      await axios.delete(`${this.apiUrl}/collections/${reaction.extraData.collectionId}/remove`, {
        data: {
          collection_id: reaction.extraData.collectionId,
          photo_id: reaction.extraData.photoId
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Photo removed to collection successfully");
    } catch (error) {
      console.error("Error removing photo from collection Photo: ", error);
    }
  }

  static async updatePhoto(areaId: number, accessToken: string): Promise<void> {
    const reaction: Reaction = await getReactionByAreaId(areaId);

    try {
      await axios.put(`${this.apiUrl}/photos/${reaction.extraData.photoId}`, {
        description: reaction.extraData.description
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Photo description updated successfully");
    } catch (error) {
      console.error("Error updating photo: ", error);
    }
  }

  static async updateProfile(areaId: number, accessToken: string): Promise<void> {
    const reaction: Reaction = await getReactionByAreaId(areaId);

    try {
      await axios.put(`${this.apiUrl}/me`, {
        first_name: reaction.extraData.firstname,
        last_name: reaction.extraData.lastname
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  }
}

export default Unsplash;
