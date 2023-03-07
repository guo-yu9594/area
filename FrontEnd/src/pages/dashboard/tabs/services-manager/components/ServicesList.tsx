import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  SxProps,
  Theme,
} from "@mui/material";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import Grow from "@mui/material/Grow";

const defaultImg: string =
  "https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227";

type Service = {
  id: number;
  title: string;
  description: string;
  logo: string;
  extraData: any;
};

const ServiceItemStyle: SxProps<Theme> = {
  marginY: "7%",
  marginX: "5%",
  display: "flex",
  alignItems: "center",
  border: "1px solid white",
  borderRadius: "25px",
  paddingY: "15%",
  width: "7vw",
  minHeight: "7vh",
  maxHeight: "7vh",
};

const ServicesListStyle: SxProps<Theme> = {
  width: "90%",
  height: "100%",
  marginTop: "2%",
  marginX: "5%",
  marginBottom: "0",
};

const getServices = async (): Promise<Service[] | undefined> => {
  const url: string = "http://localhost:8080/elements/services";
  const config: AxiosRequestConfig = {
    headers: { Authorization: localStorage.getItem("token") },
  };

  try {
    const response = await axios.get(url, config);
    const data: Service[] = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

const authService = async (service: Service): Promise<void> => {
  const reqUrl: string = "http://localhost:8080/services/url/" + service.id;
  const config: AxiosRequestConfig = {
    headers: { Authorization: localStorage.getItem("token") },
  };

  try {
    const response = await axios.get(reqUrl, config);
    localStorage.setItem("serviceId", service.id.toString());
    window.location.href = response.data;
  } catch (error) {
    console.error(error);
  }
};

const ServicesList = (): JSX.Element => {
  const [services, setServices] = useState<Service[] | undefined>([]);

  useEffect(() => {
    (async () => {
      setServices(await getServices());
    })();
  }, []);

  if (!services) throw new Error("Requested services list is undefined");

  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <ImageList sx={ServicesListStyle} cols={6}>
        {services.map((item) => {
          const logo = !item.logo ? defaultImg : item.logo;

          return (
            <center key={item.title}>
              <ImageListItem
                onClick={() => authService(item)}
                sx={ServiceItemStyle}
                key={defaultImg}
              >
                <img
                  style={{ width: "50%", height: "50%", objectFit: "contain" }}
                  src={`${logo}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${logo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItemBar title={item.title} position="below" />
            </center>
          );
        })}
      </ImageList>
    </Grow>
  );
};

export default ServicesList;
