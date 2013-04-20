#!/usr/bin/env watchr
watch(/(.*)-(tests|code).js/) do |matches|
  system "clear && node #{matches[1]}-tests.js"
end