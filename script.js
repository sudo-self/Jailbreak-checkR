
      document.getElementById("check-status").onclick = function () {
        const modelNumber = document
          .getElementById("device-model")
          .value.trim();
        const statusDatabase = {
          "iPhone 5s": "Jailbreak available with Palera1n",
          "iPhone 6": "Jailbreak available with Palera1n",
          "iPhone 6 Plus": "Jailbreak available with Palera1n",
          "iPhone 6s": "Jailbreak available with Palera1n",
          "iPhone 6s Plus": "Jailbreak available with Palera1n",
          "iPhone SE (2016)": "Jailbreak available with Palera1n",
          "iPhone 7": "Jailbreak available with Palera1n",
          "iPhone 7 Plus": "Jailbreak available with Palera1n",
          "iPhone 8": "Jailbreak available with Palera1n",
          "iPhone 8 Plus": "Jailbreak available with Palera1n",
          "iPhone X": "Jailbreak with checkra1n",
          "iPhone 11": "No jailbreak available",
          "iPhone 12": "No jailbreak available",
          "iPhone 13": "No jailbreak available",
          "iPhone 14": "No jailbreak available",
          "iPad mini 4": "Jailbreak available with Palera1n",
          "iPad (5th generation)": "Jailbreak available with Palera1n",
          "iPad (6th generation)": "Jailbreak available with Palera1n",
          "iPad (7th generation)": "Jailbreak available with Palera1n",
          'iPad Pro (9.7")': "Jailbreak available with Palera1n",
          'iPad Pro (10.5")': "Jailbreak available with Palera1n",
          'iPad Pro (12.9") (1st generation)':
          "Jailbreak available with Palera1n",
          'iPad Pro (12.9") (2nd generation)':
          "Jailbreak available with Palera1n",
          "iPad Air 2": "Jailbreak available with Palera1n",
          "iPod Touch (7th generation)": "Jailbreak available with Palera1n",
          "Apple TV HD": "Jailbreak available with Palera1n",
          "Apple TV 4K (1st generation)": "Jailbreak available with Palera1n",
          "Apple TV 4K (2nd generation)": "No jailbreak available",
        };
        const status = statusDatabase[modelNumber] || "Device Not Detected";

        document.getElementById("result").innerText = status;

        const palera1nImage = document.getElementById("palera1n-image");
        const checkra1nImage = document.getElementById("checkra1n-image");
        const lockedImage = document.getElementById("locked-image");

        if (status.includes("Palera1n")) {
          palera1nImage.style.display = "block";
          checkra1nImage.style.display = "none";
          lockedImage.style.display = "none";
        } else if (status.includes("checkra1n")) {
          palera1nImage.style.display = "none";
          checkra1nImage.style.display = "block";
          lockedImage.style.display = "none";
        } else {
          palera1nImage.style.display = "none";
          checkra1nImage.style.display = "none";
          lockedImage.style.display = "block";
        }
      };

      document
        .querySelector(".home-button")
        .addEventListener("click", function () {
          const password = prompt("Enter the SSH password:");

          if (password === "alpine") {
            alert("iphone:~Root:");
            document.getElementById("hidden-link").style.display = "block";
          } else {
            alert("Incorrect password. Try again.");
          }
        });