import express, { Request, Response } from "express";
import Unsplash from "../../Services/unsplash";

class UnsplashRController {
  public async createCollection(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const accessToken: string = req.headers.authorization;

    try {
      const info = await Unsplash.createCollection(areaId, accessToken);
      res
        .status(200)
        .json({ message: "Unsplash collection created successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async updateCollection(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const accessToken: string = req.headers.authorization;

    try {
      const info = await Unsplash.updateCollection(areaId, accessToken);
      res
        .status(200)
        .json({ message: "Unsplash collection updated successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async deleteCollection(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const accessToken: string = req.headers.authorization;

    try {
      const info = await Unsplash.deleteCollection(areaId, accessToken);
      res
        .status(200)
        .json({ message: "Unsplash collection deleted successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async likePhoto(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const accessToken: string = req.headers.authorization;

    try {
      const info = await Unsplash.likePhoto(areaId, accessToken);
      res
        .status(200)
        .json({ message: "Unsplash photo liked successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async unlikePhoto(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const accessToken: string = req.headers.authorization;

    try {
      const info = await Unsplash.unlikePhoto(areaId, accessToken);
      res
        .status(200)
        .json({ message: "Unsplash photo unliked successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async addPhotoToCollection(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const accessToken: string = req.headers.authorization;

    try {
      const info = await Unsplash.addPhotoToCollection(areaId, accessToken);
      res
        .status(200)
        .json({ message: "Unsplash photo added to collection successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async removePhotoFromCollection(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const accessToken: string = req.headers.authorization;

    try {
      const info = await Unsplash.removePhotoFromCollection(areaId, accessToken);
      res
        .status(200)
        .json({ message: "Unsplash photo removed to collection successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async updatePhoto(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const accessToken: string = req.headers.authorization;

    try {
      const info = await Unsplash.updatePhoto(areaId, accessToken);
      res
        .status(200)
        .json({ message: "Unsplash photo updated successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  public async updateProfile(req: Request, res: Response) {
    const areaId: number = +req.headers.areaid;
    const accessToken: string = req.headers.authorization;

    try {
      const info = await Unsplash.updateProfile(areaId, accessToken);
      res
        .status(200)
        .json({ message: "Unsplash profile updated successfully", info });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

export default UnsplashRController;
