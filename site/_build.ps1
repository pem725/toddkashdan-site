$d=Split-Path -Parent $MyInvocation.MyCommand.Path
$u=New-Object System.Text.UTF8Encoding $false
$head=[IO.File]::ReadAllText("$d\_parts\head.html",$u); $foot=[IO.File]::ReadAllText("$d\_parts\foot.html",$u)
foreach($f in Get-ChildItem "$d\_src\*.html"){
 $b=[IO.File]::ReadAllText($f.FullName,$u)
 $t=[regex]::Match($b,'<!--TITLE: (.*?)-->').Groups[1].Value; $ds=[regex]::Match($b,'<!--DESC: (.*?)-->').Groups[1].Value; $on=[regex]::Match($b,'<!--ON: (.*?)-->').Groups[1].Value
 $b=[regex]::Replace($b,'<!--(TITLE|DESC|ON): .*?-->\r?\n','')
 $h=$head.Replace('{{TITLE}}',$t).Replace('{{DESC}}',$ds)
 foreach($k in 'purpose','books','speaking','media','lab','about','quiz','contact'){ $h=$h.Replace("{{ON-$k}}", $(if($k -eq $on){'on'}else{''})) }
 $h=$h.Replace(' class=""','')
 [IO.File]::WriteAllText("$d\$($f.Name)", $h+$b+$foot, $u); "$($f.Name) built"
}
