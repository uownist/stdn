# choosing an OS
def choosingOS():
    fear_technology = input("Do you fear technology: ")

    if fear_technology.lower() == "yes":
        is_dady_rich = input("Is your dady rich: ")

        if is_dady_rich.lower() == "yes":
            print("----- Go for MacOS, coz u r boroloxa -----")
        else:
            print("----- Go for GuluGulu Chrome -----")
    else:
        care_about_freedom_privacy = input("Do you care about freedom privacy: ")

        if care_about_freedom_privacy.lower() == "yes":
            has_life = input("Do you have a life: ")

            if has_life.lower() == "yes":
                print("----- Go for Ubuntu, Debian or Fedora -----")
            else:
                print(
                    "----- You can go for Arch BTW, Slackware or Gentoo without any kind of doubt -----"
                )
        else:
            wanna_bkcda_os = input(
                "Do you wanna an OS to serve as the third temple of Jerusalem and include the ability to communicate with god: "
            )

            if wanna_bkcda_os.lower() == "yes":
                print("----- Go the hell and use Temple OS / Windows -----")
            else:
                print("----- Ahhh shii..! w8, are you CIA?! -----")


choosingOS()
