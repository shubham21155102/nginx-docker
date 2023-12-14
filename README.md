# Nginx-Docker

## NGINX

- Pronounciation :Engine X
- PowerFul Web Server
- Uses non-threaded and event driven structure
- Used as a reverse proxy server, load balancer, mail proxy server, and HTTP cache

**Installation using Docker**

```
docker pull nginx
```

**Run Command Using Dcoker**

```
docker run -p 8000:80 nginx
```

**Diagram of Normal HTTP Connection**

```mermaid
   graph LR
    A[Client] -- Normal HTTP Connection --> B[Server]
```

**Diagram of HTTP Connection with VPN**

- Forward Proxy Sever is used to connect to the VPN

```mermaid
   graph LR
    A[Client] -- Normal HTTP Connection --> B[Server]
    A <--> C[Forward Proxy Server]
    C <--> B
```

```mermaid
   graph LR
    A[Client 1] <--> B[Forward Proxy :VPN]
    C[Client 2]<--> B
    D[Client 3]<--> B
    E[Client 4]<-->B
    B<-->F[Server]   
  
```

- Server is not able to identify the client in forward proxy server
  - Forward Proxy Server is used to connect to the VPN

**Connection of NGINX**

```mermaid
   graph LR
    A[Client] -- Normal HTTP Connection --> B[Reverse Proxy S:NGINX]
    B <--> C[Server 1]
    B <--> D[Server 2]
    B <--> E[Server 3]
    B <--> F[Server 4]
  
```

- NGINX is used to connect to the VPN
  - Client is not able to identify the server in NGINX case

```mermaid
graph LR;
A[Client 1]<-->B[NGINX]
C[Client 2]<-->B
D[Client 3]<-->B
E[Client 4]<-->B
F[Client 5]<-->B
G[Client 6]<-->B
H[Client 7]<-->B
B--Request Sending On specific server after decision-->I[Decision Output]
I-->J[Server 1]
I-->K[Server 2]
I-->L[Server 3]
I-->M[Server 4]
I-->N[Server 5]
I-->O[Server 6]
I-->P[Server 7]
I-->Q[Server 8]

```

**More Clearation**

```mermaid
graph LR;
A[Client 1]<-->B[NGINX]
C[Client 2]<-->B
D[Client 3]<-->B
E[Client 4]<-->B
F[Client 5]<-->B
G[Client 6]<-->B
H[Client 7]<-->B
B--/admin-->J[Server 1]
B--/user-->K[Server 2]
B--/admin-->L[Server 3]
B--/settings-->M[Server 4]
B--/all-->N[Server 5]
B--/todo-->O[Server 6]
B--/example-->P[Server 7]
B--/ex-->Q[Server 8]
```

## Contributions

- Can Handle 10000 Concurrent Requests
- Catche HTTP Requests
- Act as Reverse Proxy
- Act as Load Balancer
- Act as an API Gateway(see upper example)
- Serve and Cache Static files like images ,videos etc.
- Handle SSL Certificates

## Codes

```
docker run -it -p 8080:80 ubuntu
```

```
apt-get update
```

```
apt-get install nginx
```

```
cd /etc/
```

```
ls
```

```
cd nginx/
```

```
ls
```

```
cat nginx.conf
```

```
apt-get install vim
```

```
touch nginx.conf
```

```
events {


}

http{
        server{
             listen 80;
             server_name _;
             location /{
                     return 200 "Return from Shubham NGINX MACHINE";
             }
       }


}

```

- i for write
- ctrc+c then
- :wq Enter

```
nginx -s reload
```
