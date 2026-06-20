(require 'ox-publish)

(setq
  base-dir (car argv)
  out-dir (cadr argv)
  org-publish-project-alist
      `(("org-pages"
         :base-directory ,base-dir
         :base-extension "org"
         :publishing-directory ,out-dir
         :recursive t
         :publishing-function org-html-publish-to-html
         :section-numbers nil
         :with-toc nil
         :html-postamble nil)

        ("all" :components ("org-pages"))))

(org-publish-project "all" t)
