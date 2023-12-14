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

 