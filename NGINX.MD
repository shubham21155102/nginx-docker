## NGINX 

- Pronounciation :Engine X
- PowerFul Web Server
- Uses non-threaded and event driven structure
- Used as

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
sequenceDiagram
    Client->>Server: Normal HTTP Connection
```
**Diagram of HTTP Connection with VPN**
 - Forward Proxy Sever is used to connect to the VPN
```mermaid
   graph LR
    A[Client] -- Normal HTTP Connection --> B[Server]
    A --> C[Forward Proxy Server]
    C --> B
```
```mermaid
   graph LR
    A[Client 1] --> B[Forward Proxy Server:VPN]
    C[Client 2]--> B
    D[Client 3]--> B
    E[Client 4]-->B
    B-->F[Server]   
  
```
