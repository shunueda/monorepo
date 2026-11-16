;; -*- lexical-binding: t; -*-

(require 'xdg)

(add-to-list 'default-frame-alist '(fullscreen . maximized))
(add-to-list 'default-frame-alist '(menu-bar-lines . 0))
(add-to-list 'default-frame-alist '(tool-bar-lines . 0))
(add-to-list 'default-frame-alist '(vertical-scroll-bars . nil))

(if (eq system-type 'gnu/linux)
  (add-to-list 'default-frame-alist '(undecorated . t))
  (add-to-list 'default-frame-alist '(undecorated-round . t)))

(startup-redirect-eln-cache (expand-file-name "emacs/eln-cache/" (xdg-cache-home)))
