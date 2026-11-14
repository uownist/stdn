# first import socket
import socket


# create a function
def find_ip_address():
    # input user domain
    domain = input("Enter your domain (e.g google.com): ")

    # find domain ip address
    ip_address = socket.gethostbyname(domain)

    # print ip address
    print(f"IP address of 'https://{domain}' is: {ip_address}")


find_ip_address()
