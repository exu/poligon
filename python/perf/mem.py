import resource

rsrc = resource.RLIMIT_DATA
soft, hard = resource.getrlimit(rsrc)
print 'Soft limit starts as  :', soft

resource.setrlimit(rsrc, (1, hard)) #limit to one kilobyte

soft, hard = resource.getrlimit(rsrc)
print 'Soft limit changed to :', soft

a = range(1000000)

print len(a)
